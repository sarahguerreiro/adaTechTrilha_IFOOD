/*function soma(numer1, numer2, numer3) {
    if (tipo === 'soma') {
        return numer1 + numer2
    }
    if (tipo === 'soma') {
        return numer3 + numer1
    }
}

const result = somar(5, 3, 'soma')
console.log(result)*/

function mult(numer1, numer2) {
    return numer1 * numer2
}

function soma(numer1, numer2) {
    return numer1 + numer2
}

function calc(numer1, numer2, tipo) {
    if (tipo === '+') {
        return soma(numer1, numer2)
    }
}