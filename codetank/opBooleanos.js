/*
== IGUALDADE de conteudo
  (ou === IGUALDADE DE CONTEUDO E DE TIPO)
!= DESIGUALDADE
> MAIOR QUE
  >= MAIOR OU IGUAL
< MENOR QUE
  <= MENOR OU IGUAL

*/
const valor = 10

console.log(valor == 10)
console.log(valor > 20)
console.log(valor === 10)
console.log(10 == '10')
console.log(10 === '10')

console.clear()

console.log(10 != 10)
console.log(10 != '10')
console.log(10 !== '10')


// CONJUNÇÕES LÓGICAS

// && - AND 

let idade = 27;
let cnh = true;

const habilitado = idade >=18 && cnh === true

console.log('Posso dirigir?', habilitado)

// || - OR

idade = 40;
const facultativo = idade < 18 || idade >= 70

// |  - NOT

const gostou = false;
console.log(!gostou)