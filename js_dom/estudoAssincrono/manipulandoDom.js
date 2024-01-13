let elemento = document.querySelector('ul')
elemento.innerHTML =
  elemento.innerHTML +
  `<div>Essa div será adicionada logo após o conteúdo que já existe no "elemento".</div>`;

  // Obtendo o elemento da lista (ul)
const lista = document.querySelector("ul#lista");

// Obtendo os elementos filhos que já existem na lista
const itensExistentes = document.querySelectorAll("li");

// Criando a tag li e adicionando conteúdo nela
const novoItem = document.createElement("li");
novoItem.textContent = "Aprender a utilizar o insertBefore ✅";

/* Adicionando o elemento li (novoItem) dentro da lista (ul),
   antes do segundo elemento li dela. */
lista.insertBefore(novoItem, itensExistentes[0]);