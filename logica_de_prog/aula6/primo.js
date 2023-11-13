/*let numero = 1;

alert(numero);

numero++

const parar = Number(prompt("para parar digite 0"))
if (!parar) {
    
}

let numero = 10;
while (numero >=0) {
    console.log(numero)
    numero--;
}
*/

let primo = true;
let i = 2;
let number = 7;

while (i < number) {
  if (number % i === 0) {
    primo = false;
    break;
  }
  i++
}

if (primo) {
  console.log(`${number} é um numero primo.`)
} else {
  console.log(`${number} não é um número primo.`)
}