function criarTabuleiro() {
    return Array(9).fill(null);
  }
  
  function verificarVencedor(tabuleiro) {
    const padroesVitoria = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    for (const padrao of padroesVitoria) {
      const [a, b, c] = padrao;
      if (
        tabuleiro[a] &&
        tabuleiro[a] === tabuleiro[b] &&
        tabuleiro[a] === tabuleiro[c]
      ) {
        return tabuleiro[a];
      }
    }
    return null;
  }
  
  function tabuleiroCompleto(tabuleiro) {
    return tabuleiro.every((celula) => celula !== null);
  }
  
  function jogar() {
    let tabuleiro = criarTabuleiro();
    let jogadorAtual = "X";
    let jogoAtivo = true;
  
    function status() {
      console.log(
        tabuleiro[0] || " ",
        "|",
        tabuleiro[1] || " ",
        "|",
        tabuleiro[2] || " "
      );
      console.log(
        tabuleiro[3] || " ",
        "|",
        tabuleiro[4] || " ",
        "|",
        tabuleiro[5] || " "
      );
      console.log(
        tabuleiro[6] || " ",
        "|",
        tabuleiro[7] || " ",
        "|",
        tabuleiro[8] || " "
      );
    }
  
    let rodada = 0;
  
    while (jogoAtivo) {
      console.log("Rodada número " + rodada);
      status();
  
      rodada++;
  
      const movimento = prompt(
        `Jogador ${jogadorAtual}, digite o número da célula (1-9):`
      );
      const indiceMovimento = parseInt(movimento) - 1;
  
      if (
        tabuleiro[indiceMovimento] === null &&
        indiceMovimento >= 0 &&
        indiceMovimento <= 8
      ) {
        tabuleiro[indiceMovimento] = jogadorAtual;
  
        const vencedor = verificarVencedor(tabuleiro);
        if (vencedor) {
          console.log(`Jogador ${vencedor} venceu!`);
          jogoAtivo = false;
          status();
        } else if (tabuleiroCompleto(tabuleiro)) {
          console.log("Empate!");
          jogoAtivo = false;
          status();
        } else {
          jogadorAtual = jogadorAtual === "X" ? "O" : "X";
        }
      } else {
        console.log("Jogada inválida. Tente novamente.");
      }
    }
  }
  
  jogar();
  