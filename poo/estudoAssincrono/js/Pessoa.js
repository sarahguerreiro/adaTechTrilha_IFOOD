// programa principal
// POO = Programaçao Orientada a Objeto

// CLASSES = São modelos/moldes de objetos
// objetos = sao abstrações/representações de 'coisas' q existem no mundo real
// OBJETO = Instancia ou objeto do tipo | objeto é um tipo de dado

class Pessoa 
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

    // metodos = funções/ comportamento 
    constructor(nome, idade, peso, altura) {
        this._nome = nome
        this._idade = idade
        this._peso = peso
        this._altura = altura
        this._imc = this._peso / (this._altura * this._altura)
        Pessoa.totalPessoas += 1 // contador co m incremento
    }

    calculaImc() {
        return (this._peso / (this._altura * this._altura)).toFixed(2)
    }

    classificaImc(valorImc) {
        // pega o
        valorImc = (this.imc).toFixed(2)
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

    // get = pegar 
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

    // set = configurar, editar, alterar 

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