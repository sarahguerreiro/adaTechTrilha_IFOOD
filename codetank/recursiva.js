/*

5! = 5*4 5*3 5*2 5*1 
5! = 5* 4! (isto é, um fatorial de um numero pode ser feito, baseado no fatorial de outro numero)

Generalizando essa ideia:

n! = n * (n-1)!
1! = 1

*/

//RECURSIVIDADE: Uma função que dentro dela, possui uma chamada pra ela mesma:

function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
    
}

console.log(fatorial(5))