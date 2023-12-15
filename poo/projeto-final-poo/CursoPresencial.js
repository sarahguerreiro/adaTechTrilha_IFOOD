import { Curso } from './Curso.js'

export class CursoPresencial extends Curso {
  constructor(nome, cargaHoraria, valor, local) {
    super(nome, cargaHoraria, valor)
    this.local = local
  }

  getInfo() {
    return `Curso: ${this.nome} - Carga Horária: ${this.cargaHoraria} horas - Valor: ${this.valor} - Local: ${this.local} `
  }
}
