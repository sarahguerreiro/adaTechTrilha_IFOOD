/*do while*/

let totalPares = 0;
let totalImpares = 0;
let stop = 1;

do {
  const numero = Number(prompt('Digite um numero'))
  stop = numero

  if(numero % 2 === 0) {
    totalPares = totalPares + numero;
  } else {
    totalImpares = totalImpares + numero;
  }
} while (stop !== 0);

console.log('Total das somas dos pares:', totalPares)
console.log('Total das somas dos Impares:', totalImpares)
console.log('Total:', totalImpares + totalPares)


/* While */

let totalPares = 0;
let totalImpares = 0;

while(true){
  const numero = Number(prompt('Digite um numero'))
  if(numero === 0) {
    break;
  }

  if(numero % 2 === 0) {
    totalPares = totalPares + numero;
  } else {
    totalImpares = totalImpares + numero;
  }
}

console.log('Total das somas dos pares:', totalPares)
console.log('Total das somas dos Impares:', totalImpares)
console.log('Total:', totalImpares + totalPares) 