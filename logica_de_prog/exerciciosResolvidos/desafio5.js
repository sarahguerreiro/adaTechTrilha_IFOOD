const ano = 2000;

if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0){
    console.log("Ano bissexto")
} else {
    console.log("Não é ano bissexto")
}

const anoBissexto = (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0 ? "Ano bissexto" : "Não é ano bissexto" 

console.log(anoBissexto)