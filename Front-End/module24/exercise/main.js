function Pokemon(nome, tipo, hp, ataque) {
    if (typeof nome !== 'string') {
        return console.log("O nome do Pokemon precisa ser uma string!");
    }

    if (!Array.isArray(tipo)) {
        return console.log("O(s) tipo(s) precisa(m) ser um array!");
    }

    if (!Number.isInteger(hp)) {
        return console.log('O HP precisa ser um numero inteiro');
    }

    if (!Array.isArray(ataque)) {
        return console.log('O(s) golpe(s) precisa(m) ser um array!');
    }

    this.nome = nome;
    this.tipo = tipo;
    this.hp = hp;
    this.ataque = ataque;

    this.exibirStatus = function () {
        return console.log(`\nNome: ${this.nome},\n Tipo(s): ${this.tipo},\n HP: ${this.hp},\n Ataque(s): ${this.ataque}`);
    }
}

function PokemonFogo(nome, hp) {
    Pokemon.call(this, nome, ['Fogo'], hp, ['Lanca chamas']);

    this.lancarChamas = function () {
        return console.log('🔥 Lanca chamas!!!');
    }
}

function PokemonAgua(nome, hp) {
    Pokemon.call(this, nome, ['Agua'], hp, ['Jato de Agua']);

    this.jatoDeAgua = function () {
        return console.log('💧 Jato de Agua!!!');
    }
}

// instancia 1 (Pokemon generico)
const eevee = new Pokemon ('eevee', ['normal'], 50, ['ataque rapido']);
eevee.exibirStatus();

// instancia 2 (Pokemon de Fogo)
const charmander = new PokemonFogo('charmander', 80);
charmander.exibirStatus();
charmander.lancarChamas();

// instancia 3 (Pokemon de Agua)
const squirtle = new PokemonAgua('squirtle', 85);
squirtle.exibirStatus();
squirtle.jatoDeAgua();

