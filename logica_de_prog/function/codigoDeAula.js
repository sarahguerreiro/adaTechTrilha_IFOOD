const quantidadeDados = 3;
const quantidadeLados = 9;
const quantidadeTentativas = 3;

function gerarNumeroDadoAleatorio(quantidadeLados) {
  return Math.floor(Math.random() * quantidadeLados;)
}

function rolagemDados() {
  const listResultado = [];
  
  for(let tentativa = 1; tentativa <= quantidadeTentativa; tentativa++ )
    let dados = {};
  
    for(let dado = 1; dado <= quantidadeDados; dado++)
      const numeroDadoGerado = gerarNumeroDadoAleatorio(quantidadeLados);
      dados['dado'+ dado] = numeroDadoGerado;
}
listaResultado.push(dados);
