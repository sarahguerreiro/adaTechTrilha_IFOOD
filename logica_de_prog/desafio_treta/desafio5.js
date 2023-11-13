const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

while (tentativas < 5) {
  const chute = Number(prompt("Em que número estou pensando? Chute entre 1 e 100."));
  tentativas++;

  if(chute === numeroAleatorio) {
    alert(`Isso, eu estava pensando exatamente no ${numeroAleatorio}`);
    break
  }

  if(chute > numeroAleatorio) {
    alert(`hmmm, ainda não. Dica: o número é menor!`)
  } else if (chute < numeroAleatorio) {
    alert(`Não foi dessa vez. Dica: o número é maior!`)
  }
}

if (tentativas === 5 && chute !== numeroAleatorio) {
    alert(`já é sua 5a tentativa. estou entendiada. O número que pensei foi: ${numeroAleatorio}`)
}