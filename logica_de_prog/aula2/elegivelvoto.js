const idade = prompt("Qualé sua idade?");

const nacionalidade = prompt("Qual sua nacionalidade?");

const elegivel = idade >= 16 && nacionalidade === "brasileira"

console.log(elegivel)