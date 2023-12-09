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
        background-color:${this.cor}; border-radius: 50%;'></div>`
    }
}

// Produção

const q2 = new quadrado(150,150, 'purple')

document.write(q2.imprimir())

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
        background-color:${this.cor}; border-radius: 50%;'></div>`
    }
}

// Produção

const q2 = new quadrado(857,820, 'purple')

document.write(q2.imprimir())