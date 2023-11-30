/* 
String primitiva =  faz ref ao fato de q se trata de uma string normal e nao de um objeto de string;
string literal = São as strings delimitadas por aspas simples, duplas ou crases. 
portanto, quando vc cria uma string literal, vc está criando uma instancia de string primitiva
um objeto de string = é sempre iniciado pela palvra reservada new e é sempre  uma instancia de uma classe String ou função similar que atua como construtura:

const stringPrimitiva = "Isso é uma string primitiva";
const stringObj = new String("Isso é uma instancia de String");

console.log(typeof stringObj)

Uma função construtora é uma função que é usada pra criar e inicializar objetos. Ela serve como um modedlo pra criação de objetos com propriedades e metodos especificos(que é o q uma string literal não tem)
*/

function Pessoa(nome, idade) {
// propriedades da função Pessoa
    this.nome = nome;
    this.idade = idade;
// metodo pra cumprimentar
    this.cumprimenta = function () {
        console.log(`Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos`)
    };
}

// Criando objetos a partir da funçao construtora Pessoa:

const pessoa1 = new Pessoa("Sarah", 27);
const pessoa2 = new Pessoa("Everton", 32);

// acessando propriedades e chamando memtodos:

console.log(pessoa1.nome);
console.log(pessoa2.idade);

pessoa1.cumprimenta();
pessoa2.cumprimenta();

// Neste exemplo, a função Pessoa é uma função construtora que aceita dois parâmetros, nome e idade, e cria objetos Pessoa com essas propriedades. Os objetos criados usando new Pessoa() herdam essas propriedades e métodos da função construtora.

// Pessoa1 e pessoa2 são instâncias da função construtora Pessoa. Cada instância tem suas próprias propriedades nome e idade, mas compartilha a estrutura definida pela função construtora Pessoa.

// uma instancia refere-se ao objeto criado a parte de uma cllasse ou funcao construtura. Essa instancia geralmente está dentro de uma variavel.