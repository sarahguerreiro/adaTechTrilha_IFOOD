/*let x = 0;
let a = 0;
let b = -5;
if (a > 0) {
    if (b < 0) {
        x = x + 5;
    } else if (a > 5) {
        x = x + 4;
    } else {
        x = x + 3;
    }
} else {
    x = x + 2;
}
console.log(x);

let question = !(true && false) || (false && true)

let n = 4;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        console.log(j);
    }
}


function numeroSolitario(numeros) {

    const unicos = {};

    for (const numeros of numeros) {

        unicos[numeros] = true;
    }

    const semDuplicatas =  
}



function quantasPalavras(frase) {
    // Inicializa o contador de palavras com 1
    let contadorPalavras = 1;
  
    // Percorre a frase a partir do segundo caractere
    for (let i = 1; i < frase.length; i++) {
      const caractereAtual = frase.charAt(i);
  
      // Se o caractere atual for uma letra maiúscula, incrementamos o contador
      if (caractereAtual === caractereAtual.toUpperCase()) {
        contadorPalavras++;
      }
    }
  
    return contadorPalavras;
  }
  
  const frase = "façaMercadoNoIfoodEntregamosTudoOQueVocêPrecisaNaPortaDaSuaCasa";
  const quantidadeDePalavras = quantasPalavras(frase);
  console.log(quantidadeDePalavras);
*/

function removedorDeDuplicados(numeros) {
  const unicos = {};

  for (const feedback of numeros) {
    unicos[feedback] = true;
  }

  const semDuplicatas = [];

  for (const feedback in unicos) {
    if (unicos.hasOwnProperty(feedback)) {
      semDuplicatas.push(feedback);
    }
  }

  return semDuplicatas;
}

const numeros = [
  "Melhorar responsividade do site",
  "Erros confusos",
  "Os botões são intuitivos",
  "Erros confusos",
];

const semDuplicatas = removedorDeDuplicados(numeros);
console.log(semDuplicatas);