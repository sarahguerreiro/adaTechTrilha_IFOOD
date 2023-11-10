// Crie um mapa para representar uma lista de compras

let listaDeCompras = new Map();

// 1. Adicione itens à lista de compras com a quantidade desejada.

// Maçãs - 5
listaDeCompras.set("macas", 5);
//console.log(listaDeCompras)
// Bananas - 3
listaDeCompras.set("banana", 3);
//console.log(listaDeCompras)

// Leite - 2
listaDeCompras.set("leite", 2);
//console.log(listaDeCompras)

// Pão - 1
listaDeCompras.set("pao", 1);
//console.log(listaDeCompras)

// 2. Verifique a quantidade de um item específico na lista de compras.
//console.log(listaDeCompras.get("banana"));



// 3. Modifique a quantidade de um item na lista de compras. Alterar a quantidade de maçãs para 10.

listaDeCompras.set("macas", 10);
//console.log(listaDeCompras)

// 4. Remova um item da lista de compras. Remover o item leite.

listaDeCompras.delete("leite");
//console.log(listaDeCompras)

// 5. Verifique se um item especifico está na lista de compras. Verificar se o leite está na lista de compras.

//console.log(listaDeCompras.has("leite"));

// 6. Liste todos os itens na lista de compras e suas quantidades.x

// 7. Calcule o número total de itens na lista de compras. 
