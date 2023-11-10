const numero = Number(prompt("Digite um número: "));

if (numero % 2 === 0) {
    console.log("Par!")
} else {
    console.log("Ímpar!")
}

numero % 2 === 0 ? console.log("Par!") : console.log("Ímpar!")
