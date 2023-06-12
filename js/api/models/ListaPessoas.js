export class ListaPessoas {

    _pessoas

    constructor() {
        this._pessoas = []
    }

    adiciona(pessoa) {
        this._pessoas.push(pessoa);
    }

    // (programação defensiva) retornar uma cópia do array
    // usar o concat, passo o array _pessoas como atributo, retorno uma copia formada dele nesse momento.
    get pessoas() {
        // concatenei um novo array vazio com o array _pessoas.
        // retorno _pessoas
        return [].concat(this._pessoas);
    }
}