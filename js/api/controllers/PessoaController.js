//import { ListaPessoas } from "../models/ListaPessoas"
import { Pessoa } from "../models/Pessoa.js"

export class PessoaController {

    _inputNome
    _inputIdade
    _inputPeso
    _inputAltura

    constructor() {
        this._inputNome = document.querySelector('#nome')
        this._inputIdade = document.querySelector('#idade')
        this._inputPeso = document.querySelector('#peso')
        this._inputAltura = document.querySelector('#altura')
        // peguei o conteudo dos input pelo query selector, pelo ID e joguei nas variaveis

        // instancio a listaPessoas
        //let _lista = new ListaPessoas
    }

    adiciona(event) {

        event.preventDefault()

        //criar nova pessoa, posso so criar e nao é obrigatório armazenar numa variavel
        this._criaPessoa()

        console.log(this._criaPessoa())

    }

    _criaPessoa() {
        return new Pessoa(
            this._inputNome.value,
            this._inputIdade.value,
            this._inputPeso.value,
            this._inputAltura.value
        )
    }

    _limpaFormulario() {
        this._inputNome.value = ''
        this._inputIdade.value = ''
        this._inputPeso.value = ''
        this._inputAltura.value = ''

        this._inputNome.focus()
    }
}