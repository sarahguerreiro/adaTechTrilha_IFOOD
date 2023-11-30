class Pessoa {
    nome
    idade
    cpf
    constructor(n, i, c) {
        this.nome = n;
        this.idade = i;
        this.cpf = c;
    }
    apresentar(){
        return `Olá, ${this.nome}! Vc tem ${this.idade} e seu cpf é:${this.cpf} `;
    }
}

const identifica = new Pessoa('Letícia', 28, 184845);

console.log(identifica.apresentar());