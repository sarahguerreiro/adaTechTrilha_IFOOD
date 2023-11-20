let array = [1,3,5,6,9];
let resultado = [];

let tamanho = array.length;

for(let i = 0; i < tamanho - 1; i++){
    let min = i;
    for(let j = i + 1; j < tamanho; j++){
        if(array[j] < array[min]){
            min = j;
        }
    }

    let temp = array[i];
    array[i] = array[min];
    array[min] = temp;
}

let arrayMin = array.slice();
let arrayMax = array.slice();

arrayMin.pop();
arrayMax.shift();

let somaMin = arrayMin.reduce((acc, curr) => acc + curr, 0);
let somaMax = arrayMax.reduce((acc, curr) => acc + curr, 0);

resultado.push(somaMin, somaMax);

console.log(resultado);