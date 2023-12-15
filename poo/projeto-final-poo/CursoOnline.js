import { Curso } from './Curso.js'
export class CursoOnline extends Curso {
  constructor(nome, cargaHoraria, valor, plataforma) {
    super(nome, cargaHoraria, valor)
    this.plataforma = plataforma
  }
  getInfo() {
    return `Curso: ${this.nome} - Carga Horária: ${this.cargaHoraria} horas - Valor: ${this.valor} - Plataforma: ${this.plataforma} `
  }
}
