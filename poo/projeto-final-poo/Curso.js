export class Curso {
  static id = 1
  nome
  cargaHoraria
  valor

  constructor(nome, cargaHoraria, valor) {
    this.nome = nome
    this.cargaHoraria = cargaHoraria
    this.valor = valor
    this.id = Curso.id++
  }

  getInfo() {
    return `Id Curso: ${this.id} Curso: ${this.nome} - Carga Horária: ${this.cargaHoraria} horas - Valor: ${this.valor} `
  }
}
