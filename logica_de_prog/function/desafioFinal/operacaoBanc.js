function deposito(saldo, valor) {
  saldo += valor;
  alert(`Depósito de ${valor} realizado. Novo saldo: ${saldo}`);
  return saldo;
}

function saque(saldo, valor) {
try {
  if (valor > saldo) {
    throw new Error("Saldo insuficiente.");
  } else {
    saldo -= valor;
    alert(`Saque de ${valor} realizado. Novo saldo: ${saldo}`);
  }
  return saldo;
} catch (error) {
  alert(`Ocorreu um erro ao processar o saque: ${error.message} Saldo atual: ${saldo}`);
  return saldo;
}
  
}


function consultarSaldo(saldo) {
  alert(`Saldo atual: ${saldo}`);
}

function aplicacaoBancaria() {
  let saldo = 0;
  let valorOperacao = 0;
  let regra = true;
  
  while (regra) {
    const escolha = prompt("Escolha uma operação 1. Depósito 2. Saque 3. Consultar Saldo 4. Sair");

    switch (escolha) {
      case "1":
        valorOperacao = parseFloat(prompt("Digite o valor da operação: "));
        saldo = deposito(saldo, valorOperacao);
        break;
      case "2":
        valorOperacao = parseFloat(prompt("Digite o valor da operação: "));
        saldo = saque(saldo, valorOperacao);
        break;
      case "3":
        consultarSaldo(saldo);
        break;
      case "4":
        console.log("Saindo da operação");
        regra = false;
        break;
      default:
        console.log("Opção inválida");
        break;
    }
  }
}

aplicacaoBancaria();