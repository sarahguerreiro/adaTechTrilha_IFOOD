const idade = 65;
const compraMinima = 100;
const isNewClient = false;

const elegivel = idade>=60 && compraMinima>=100 && !isNewClient;

console.log(elegivel)