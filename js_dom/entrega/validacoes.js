// Começo definindo as funções de verificações do projeto fora do meu evento principal pra que elas possam ser acessadas em qualquer parte do codigo. Essa primeira função usa uma expressão regular pra validar endereços de email, como pede orequisito 1. Se o preenchimento segue o padrão de um endereço de email, ele será considerado válido:

export function isValidNome(nome) {
    return /^[A-Za-z\s]+$/.test(nome);
}
  
export function isValidCep(cep) {
    return /^\d{5}-?\d{3}$/.test(cep);
}
  
export function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
  // A segunda função salva os valores preenchidos localmente:
  
export function saveFormValues() {
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
      localStorage.setItem(input.id, input.value);
    });
}
  
  // Já nessa função, os valores preenchidos anteriormente sao carregados, pra que o user não seja solicitado a preencher os campos novamente, como pede o requisito 1:
  
export function loadFormValues() {
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
      const valoresSalvos = localStorage.getItem(input.id);
      if (valoresSalvos) {
        input.value = valoresSalvos;
      }
    });
}