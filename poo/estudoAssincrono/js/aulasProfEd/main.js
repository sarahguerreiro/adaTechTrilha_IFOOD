//import { Pessoa } from "./Pessoa";
import { PessoaController } from "../js/aulasProfEd/PessoaController.js";

let pessoaController = new PessoaController();

// CONTROLAR ENVIO DO FORMULARIO E EXIBIÇÃO NA TABELA

let form = document.querySelector('form')

//escutador de evento no formulario

form.addEventListener('submit', (event) => {

    //adicionar pesssoa
    pessoaController.adiciona(event)

    //limpar formulario
    pessoaController._limpaForm()
    
})