// Protótipo

class quadrado {
    base
    altura
    cor
    constructor(base, altura, cor){
        this.base = base 
        this.altura = altura
        this.cor = cor || 'green'
    }
    calcularArea() {
        return this.base * this.altura
    }
    imprimir() {
        return `<div style = 'width:${this.base}px; height:${this.altura}px;
        background-color:${this.cor}'></div>`
    }
}

// Produção

const q1 = new quadrado(5,5)
const q2 = new quadrado(10,10)

console.log(q1.calcularArea())
console.log(q2.cor)
