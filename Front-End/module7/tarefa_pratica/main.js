const form = document.getElementById("form-numeros");
const numeroA = document.getElementById("numeroA");
const numeroB = document.getElementById("numeroB");

function validaOrdemNumeros(numeroA,numeroB){
    //transforma a string para numero real
    return parseFloat(numeroB) > parseFloat(numeroA);
}

function atualizarMensagens(){
    //“O valor que está no campo(nesse momento de digitação) é maior que o valor que está no campo A?” e guarda V ou F
    const formEValido = validaOrdemNumeros(numeroA.value,numeroB.value);
    
    //verifica se o form é valido se sim, a mensagem de erro continua sem aparecer se não a mensagem de erro aparece
    if(!formEValido){
        numeroB.classList.add('erro');
        document.querySelector('.mensagem-erro').style.display='block';
    } else{
        numeroB.classList.remove('erro');
        document.querySelector('.mensagem-erro').style.display= 'none';
    }
}

//validação ao enviar o formulário
form.addEventListener('submit', function(e){
    e.preventDefault(); // impede o envio automático do formulário
    let formEValido = false;

    const mensagemSucesso = `Número B: <b>${numeroB.value}</b> é maior que número A: <b>${numeroA.value}</b>`
    formEValido = validaOrdemNumeros(numeroA.value,numeroB.value);

    if(formEValido){
        const containerMensagemSucesso = document.querySelector('.mensagem-sucesso');
        containerMensagemSucesso.innerHTML = mensagemSucesso; //insere conteudo html dentro de um elemento da pagina
        containerMensagemSucesso.style.display = 'block';

        //limpar os campos do formulario depois do envio com sucesso
        numeroA.value = '';
        numeroB.value = '';
        //mensagem de erro desaparece
        document.querySelector('.mensagem-erro').style.display= 'none';
        //remove o estilo de borda que indica o erro
        numeroB.style.border= '';
    } else{
        //aparece o estilo de borda que indica o erro
        numeroB.style.border= '1px solid red'
        atualizarMensagens(); //garante que o erro apareça se o envio for inválido
    }
});

// "Toda vez que o usuário digitar alguma coisa no campo do número A e soltar a tecla, execute essa função."
numeroA.addEventListener('input', atualizarMensagens);
// "Toda vez que o usuário digitar alguma coisa no campo do número B e soltar a tecla, execute essa função."
numeroB.addEventListener('input', atualizarMensagens);