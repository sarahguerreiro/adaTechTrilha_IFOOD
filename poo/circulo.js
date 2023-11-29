class formaGeometrica {
    base
    altura
    cor
    constructor(base, altura, cor){
        this.base = base 
        this.altura = altura
        this.cor = cor || 'green'
    }
    calcularArea() {
        const raio = this.base / 2;
        return Math.PI * Math.pow(raio, 2);
    }
    imprimir() {
        return `<div style = 'width:${this.base}px; height:${this.altura}px;
        background-color:${this.cor}'></div>`
    }
}

const circulo = new quadrado(8,8, 'red');

console.log('Area do circulo: ', circulo.calcularArea());
console.log('Em HTML: ', circulo.imprimir());

