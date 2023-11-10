const idade = Number(prompt("Digite sua idade: "));
if (idade >= 18) {
    console.log("Pode comprar bebida alcoolica!")
} else {
    console.log("Ainda não pode comprar bebida alcoolica.")
}

idade >= 18 ? console.log("Pode comprar bebida alcoolica!"): console.log("Ainda não pode comprar bebida alcoolica.")