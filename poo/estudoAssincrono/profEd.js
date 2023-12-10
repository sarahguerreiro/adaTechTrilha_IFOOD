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
// CRIAR NOVO OBJETO A PARTIR DA CLASS: vc tem uma variavel chamada pessoa1 que será um novo objeto do tipo Pessoa ou uma nova instancia de Pessoa(MANEIRA RECOMENDADA): 
let pessoa1 = new Pessoa('Herbert Biana', 78, 80.5, 1.65);
let pessoa2 = new Pessoa('Anderson Silva', 4, 6.5, 30);
let pessoa3 = new Pessoa('Branca da Silva', 4, 4.6, 20);
let pessoa4 = new Pessoa('Gilberta da Silva', 4, 4.9, 15);

console.log(Pessoa.totalPessoas)

console.log('Nome: ' + pessoa1.nome)
console.log('Idade: ' + pessoa1.idade)
console.log('IMC: ' + pessoa1.imc)

pessoa1.nome = 'sarah guerreiro'
pessoa1._idade = 30
pessoa1.peso = 54

console.log('Nome: ' + pessoa1.nome)
console.log('Idade: ' + pessoa1.idade)
console.log('Peso: ' + pessoa1.peso)

console.log(pessoa1.classificaImc())
console.log(pessoa2.classificaImc())
console.log(pessoa3.classificaImc())
console.log(pessoa4.classificaImc())
/*
// ATRIBUIR VALORES PARA ATRIBUTOS DE UM OBJETO(MANEIRA NAO RECOMENDADA):
pessoa1._nome = 'Sarah'
pessoa1._idade = 27
pessoa1._peso = 70
pessoa1._altura = 1.68
//pessoa1.imc = peso / Math.pow(altura, 2)
pessoa1._sexo = 'F'

pessoa2._nome = 'Everton'
pessoa2._idade = 33
pessoa2._peso = 80
pessoa2._altura = 1.70
//pessoa2.imc = pessoa1.peso / pessoa1.altura.Math.pow(altura, 2)
pessoa2._sexo = 'M'

pessoa3._nome = 'Isabelle'
pessoa3._idade = 12
pessoa3._peso = 37
pessoa3._altura = 1.48
//pessoa3.imc = peso / Math.pow(altura, 2)
pessoa3._sexo = 'F'
*/

console.log(pessoa1)
console.log(pessoa2)
console.log(pessoa3.calculaImc())