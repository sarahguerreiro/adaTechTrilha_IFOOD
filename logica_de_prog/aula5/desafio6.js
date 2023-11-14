const lista = [1,2,3,4,5,6,7,8,9,10];
const numero = 27;


let itemEncontrado = false;

for(let count = 0; count <= lista.length; count++) {
    if (lista[count] === numero) {
        itemEncontrado = true;
        break;
    }
}
console.log(itemEncontrado ? 'numero encontrado' : 'numero nao encontrado')