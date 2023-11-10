const number = +prompt("Digite o seu numero:")
const number2 = +prompt("Digite o seu numero:")
const number3 = +prompt("Digite o seu numero:")

if (number >= number2 && number >= number3) {
    console.log("O maior de todos é: " + number)
} else if (number2 >= number3) {
    console.log("o maior de todos é: " + number2)
} else {
    console.log("o maior de todos é: " + number3)
}
