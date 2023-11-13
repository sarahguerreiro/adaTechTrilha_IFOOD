const valor1 = Number(prompt("Digite o comprimento do 1o lado: "))
const valor2 = Number(prompt("Digite o comprimento do 2o lado: "))
const valor3 = Number(prompt("Digite o comprimento do 3o lado: "))

if (valor1 === valor2 && valor2 === valor3) {
 console.log("Triangulo equilatero")
} else if (valor1 === valor2 || valor1 === valor3 || valor2 === valor3) {
    console.log("Triangulo Isósceles")
} else {
    console.log("Triangulo Escaleno")
}