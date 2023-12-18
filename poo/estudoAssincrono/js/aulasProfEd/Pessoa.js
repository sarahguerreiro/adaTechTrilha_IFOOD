// programa principal
// POO = Programaçao Orientada a Objeto

// CLASSES = São modelos/moldes de objetos
// objetos = sao abstrações/representações de 'coisas' q existem no mundo real
// OBJETO = Instancia ou objeto do tipo | objeto é um tipo de dado

// É IMPORTANTE  que o nome do arquivo tenha o mesmo nome da class, inclusive com a letra inicial maiuscula 

//Com o uso da palavra reservada export vc consegue deixar a class visivel para ser exportada p outro arquivo/ importada por outros aquivo. A export vai na frente da palavra reservada class:

export class Pessoa 
{
    // atributos = variaveis/caracteristicas
    //para indicar q um atributo é protegido, utiliza-se o simbolode # na frente do atributo, porem, seu uso está atrelado a um erro de compatibilidade em alguns navegadores, por isso a comunidade js convencionou o uso do _

    _nome // string
    _idade // integer
    _peso // float
    _altura // float
    _imc // float
    _sexo // string
    static totalPessoas = 0 
    // atributo estático ou da classe, pois nao se trata de um atributo do objeto instanciado, mas da propria class

    // metodos = funções/ comportamento 
    constructor(nome, idade, peso, altura) {
        this._nome = nome
        this._idade = idade
        this._peso = peso
        this._altura = altura
        this._imc = this._peso / (this._altura * this._altura)
        Pessoa.totalPessoas += 1 // contador com incremento no n° total de pessoas em Pessoa
    }

    calculaImc() {
        return (this._peso / (this._altura * this._altura)).toFixed(2)
    }

    classificaImc() {
        // pega o
        let valorImc = (this.imc).toFixed(2)
        let classificacao = ''

        if (valorImc < 18.5) {
            classificacao = 'Abaixo do peso. Coma mais'
        } else if (valorImc <= 24.9) {
            classificacao = 'Peso normal. Parabéns'
        } else if (valorImc <= 29.9) {
            classificacao = 'Sobrepeso. Comece a se preocupar'
        } else if (valorImc <= 34.9) {
            classificacao = 'Obesidade Grau I. Hora de correr atrás do prejuízo.'
        } else if (valorImc <= 39.9) {
            classificacao = 'Obesidade Grau II. Você não vai querer chegar no px grau.'
        } else if (valorImc >= 40) {
            classificacao = 'Obesidade móbida. Depois disso é a morte.'
        } else {
            classificacao = 'Peso Invalido'
        }
        return classificacao
    }

    //metodos acessores: GET e SET
    // get = pegar  / métodos geters:

    get nome() {
        return this._nome
    } 
    get idade() {
        return this._idade
    }
    get peso() {
        return this._peso
    }
    get altura() {
        return this._altura
    }
    get imc() {
        return this._imc
    }
    get totalPessoas() {
        return Pessoa.totalPessoas
    }

    // set = configurar, editar, alterar.
    //Dentro do parenteses vai o valor q vc quer setar
    //metodos seters:

    set nome(novoNome) {
        this._nome = novoNome
    }
    
    set idade(novaIdade) {
        this._idade = novaIdade
    }
    set peso(novoPeso) {
        this._peso = novoPeso
    }
    set altura(novaAltura) {
        this._altura = novaAltura
    }
}