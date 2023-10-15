/*

5! = 5 *4 *3 *2 *1
5! = 5*4! o fatorial de um numero pode ser calculado baseado no fatorial de outro

n! = n*(n-1)

1! = 1 matematicamente, o fatorial de 1 é sempre 1

uma função pra fatorial sem recursividade:

function fatorial(n) {

    let fat = 1

    for (let c = n; c > 1; c--) {

        fat *= c;
        
    }
    return fat
}

console.log(fatorial(3))

*/
// RECURSIVIDADE : recursão é quando uma função chama ela mesma:

function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial())