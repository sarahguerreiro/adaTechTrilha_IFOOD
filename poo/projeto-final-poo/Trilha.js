export class Trilha {
  static cursos = []
  constructor() {
  }

  static adicionarCurso(curso) {
    Trilha.cursos.push(curso)
  }

  static deletarCurso(idNome){
    Trilha.cursos = this.cursos.filter(curso => curso.id != idNome)
  }

  static atualizarProduto(novoProduto) {
    this.cursos.slice(novoProduto.id-1, 1);
    this.cursos[novoProduto.id-1] = novoProduto;
  }
}
