let n = Number(prompt("digite um numero"));

let sequencia = [8, 13];

for (let i = 2; i < n; i++) {
  sequencia[i] = sequencia[i - 1] + sequencia[i - 2];
}

console.log(`Entrada: ${n} Saída: [${sequencia.join(', ')}]`);