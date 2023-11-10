const lista = [1,2,'henrique', '27', 'prof', 'front-end', 'ada', 3,4,5, 'suel', '18', 'front end', 'full stack', 'cc', 6,7,7]

//lista.unshift(-1, 0); adc item ao 1o index
//lista.push(3); adc item ao ultimo index
//lista.pop(3); retira um item do ultimo index
//lista.shift(0); rmv o elemento na 1a posicao
//lista.splice(index, deleteCount);

//const x = lista.splice(2, 4, '1', '2'); o 1o e o 2o valor  diz o pedaco da lista que vai ser cortado a partir das posicoes; as duas strings seguintes serão adc nas posições q foram retiradas.

/*const infoUser = lista.splice(2,5);
const infoUser2 = lista.splice(5, 5);

console.log(infoUser)

console.log(infoUser2)


*/

const z = lista.includes('henrique')
console.log(z)