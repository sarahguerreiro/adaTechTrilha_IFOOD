export class ListaPessoas {

    constructor() {
        this._pessoas = []
    }
    adiciona(pessoa) {
        this._pessoas.push(pessoa)
    }

    //programmacao defensiva retornar uma copia do array
    // usando o concat, passando o nosso array como parametro
    get pessoas() {
        return [].concat(this._pessoas)
    }
}