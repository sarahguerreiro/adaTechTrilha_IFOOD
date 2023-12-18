import { Pessoa } from "../js/aulasProfEd/Pessoa.js";
//import { listaPessoas } from "../aulasProfEd/";
//import { pessoasView } from "../aulasProfEd/";

export class PessoaController {
    //atributos/propriedades:
    _inputNome
    _inputIdade
    _inputPeso
    _inputAltura

    //metodos:

    //contructor:

    this._inputNome = document.querySelector('#nome')
    this._inputIdade = document.querySelector('#idade')
    this._inputPeso = document.querySelector('#peso')
    this._inputAltura = document.querySelector('#altura')

    //criar lista de pessoas
    //this.listaPessoas = new ListaPessoas()

    //this._pessoasView = new PessoasView(document.querySelector)

}