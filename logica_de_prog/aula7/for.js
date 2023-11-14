/*for*/


/*for in*/

const carro = {
    marca: 'toyota',
    modelo: 'corola',
    ano: 2020
}

for (let propriedade in carro) {
    console.log(propriedade, carro[propriedade])
}

/*
for -of [só pra array]

for (let elemento of iteravel) {

}

const frutas = ['maça', 'banana', 'morango'];

for(let item of frutas) {
    console.log(item)
}

 */