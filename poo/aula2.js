/*class Pessoas {
    static cadastrados = 0;
    constructor(nome) {
        this.nome = nome
        Pessoas.cadastrados++
    }
}

const p1 = new Pessoas('Fulano')
const p2 = new Pessoas('Siclano')
const p3 = new Pessoas('Beltrano')

console.log(Pessoas.cadastrados)*/

class MathUtils {
    constructor(){}
    static PI() {
      return 3.14
    }
  
    static sum(n1, n2) {
      return n1 + n2;
    }
  }
  
  const m = new MathUtils();
  
  console.log(MathUtils.PI());
  console.log(MathUtils.sum(2, 5));