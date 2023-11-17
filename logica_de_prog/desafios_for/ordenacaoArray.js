/*09 - Criar um algoritmo de ordenação de arrays;

09.01 - Método que faz isso (Achar o método que ordena os arrays)
*/

/*const lista = [28, 7, 3, 11, 27, 33];

let comprimentoLista = lista.length;
let troca;

do {
    troca = false;

    for (let i = 0; i < comprimentoLista -1; i++) {

        if (lista[i] > lista[i +1]) {

            let carrega = lista[i];
            lista[i] = lista[i+1];
            lista[i + 1] = carrega;

            troca = true;
        }
    }

} while (troca);

console.log(`O array ordenado ficou assim: ${lista}`)*/

const lista = [28, 7, 3, 11, 27, 33];

console.log(lista.sort(function (a, b) {
    return a - b;
}))