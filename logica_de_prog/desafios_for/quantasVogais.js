/*Crie um programa que pede ao usuário para inserir uma palavra e conta quantas vogais (a, e, i, o, u) ela contém. Utilize um loop for e estruturas condicionais if para realizar a contagem.*/

let palavra = prompt('Digite qualquer palavra e te direi quantas vogais ela possui:');
let vogais = 0;

for (let i = 0; i < palavra.length; i++) {
  
  if (palavra[i] === "a" || palavra[i] === "e" || palavra[i] === "i" || palavra[i] === "o" || palavra[i] === "u") {
    vogais++;
    
  }
}

console.log(`a palavra ${palavra} possui ${vogais} vogais`)