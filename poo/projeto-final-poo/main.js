import { CursoPresencial } from './CursoPresencial.js'
import { CursoOnline } from './CursoOnline.js'
import { Trilha } from './Trilha.js'

const curso1 = new CursoOnline(
  'javascript',
  '300hs',
  1000.0,
  'http://teste.com.br'
)

const curso2 = new CursoPresencial(
  'HTML/CSS',
  '200hs',
  499,
  'http://teste.com.br'
)

const cursoEdit = new CursoOnline(
  'javascript',
  '300hs',
  399,
  'http://teste.com.br'
)
cursoEdit.id = 1

//Adicionar curso
Trilha.adicionarCurso(curso1)
Trilha.adicionarCurso(curso2)
console.log(Trilha.cursos)

//Atualizar informações do curso
//Trilha.atualizarProduto(cursoEdit)
//console.log(Trilha.cursos)

//Deletar curso
//Trilha.deletarCurso(1)
//console.log(Trilha.cursos)
















