const letra = prompt("Digite uma letra: ");


switch (letra) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("Vogal!")
        break;
    default:
        console.log("Consoante!")

}