const form = document.getElementById('form-contatos');
const contatos = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('telefone-contato');

    if(contatos.includes(inputNomeContato.value)){
        alert(`O contato ${inputNomeContato.value} já existe na sua lista de contatos`);
    } else if (telefones.includes(inputTelefoneContato.value)){
        alert(`O número ${inputTelefoneContato.value} já existe na sua lista de contato`);
    } else{
        contatos.push(inputNomeContato.value);
        telefones.push(inputTelefoneContato.value);

        let linha = '<tr>';

        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelefoneContato.value}</td>`;
        linha += `<td><button class="btn-remover" onclick="removerContato(this)">🗑️</button></td>`;
        linha += `</tr>`;

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function removerContato(botao) {
    const linha = botao.parentNode.parentNode;
    const nomeContato = linha.cells[0].textContent;
    const telefoneContato = linha.cells[1].textContent;
    
    // Remove a linha da tabela
    linha.remove();
    
    // Atualiza os arrays e a variável linhas
    const index = contatos.indexOf(nomeContato);
    if (index !== -1) {
        contatos.splice(index, 1);
        telefones.splice(index, 1);
    }
    
    // Reconstroi a variável linhas sem o contato removido
    linhas = '';
    const corpoTabela = document.querySelector('tbody');
    const linhasTabela = corpoTabela.querySelectorAll('tr');
    
    linhasTabela.forEach(linha => {
        linhas += linha.outerHTML;
    });
}

// No evento de submit ou blur
function formatarTelefone(input) {
    // Remove tudo que não é dígito
    const nums = input.value.replace(/\D/g, '');
    
    // Formatação condicional
    if (nums.length === 11) {
        input.value = nums.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (nums.length === 10) {
        input.value = nums.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    }
    // Se não tiver tamanho adequado, mantém sem formatação
}