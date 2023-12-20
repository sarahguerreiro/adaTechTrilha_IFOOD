// IMPORT e EXPORT são recursos do js para linkar classes a arquivos princiais.

// IMPORT = Depois da palavra reservada import é passado, entre chaves o nome da class, depois a palavra reservada from e, entre aspas, o caminho/edereço do arquivo que carrega esta class:

//import { Pessoa } from "../aulasProfEd/Pessoa.js";

//é possível passar vários import, basta compiar a linha e setar os parametros

// CRIAR NOVO OBJETO A PARTIR DA CLASS: vc tem uma variavel chamada pessoa1 que será um novo objeto do tipo Pessoa ou uma nova instancia de Pessoa(MANEIRA RECOMENDADA): 
let pessoa1 = new Pessoa('Herbert Biana', 78, 80.5, 1.65);
let pessoa2 = new Pessoa('Anderson Silva', 4, 6.5, 30);
let pessoa3 = new Pessoa('Branca da Silva', 4, 4.6, 20);
let pessoa4 = new Pessoa('Gilberta da Silva', 4, 4.9, 15);
let pessoa5 = new Pessoa('Amy Winehouse', 27, 50, 1.59, 15);

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
console.log(pessoa5.classificaImc())
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
console.log(pessoa5)