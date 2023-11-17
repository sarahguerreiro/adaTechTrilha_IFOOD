let pessoa = {
    nome: 'joão',
    idade: 70,
    cidade: 'Belém'
};
for (let propriedade in pessoa) {
    console.log(propriedade + ":" + pessoa[propriedade]);
}