const numero = Number(prompt("Digite seu número: "));
const verifica = numero % 2;
switch (verifica) {
    case 0:
        console.log("Numero par")
        break;

    case 1:
        console.log("número ímpar");
        break;
}