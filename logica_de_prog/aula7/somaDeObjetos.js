const numericos = {
    valor1: 10,
    valor2: 20,
    valor3: 30,
    valor4: 40,
};

let soma = 0;
for (let propriedade in numericos) {
    
    soma += numericos[propriedade];
}
console.log(soma)
