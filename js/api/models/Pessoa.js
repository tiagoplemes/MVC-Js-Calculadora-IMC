export class Pessoa {
    //atributos
    _nome
    _idade
    _peso
    _altura
    _imc //peso/ altura²
    _classificacao
    static totalPessoas = 0

    constructor(nome, idade, peso, altura) {
        this._nome = nome;
        this._idade = idade;
        this._peso = peso;
        this._altura = altura;
        this._imc = this.CalculaImc();
        this._classificacao = this.ClassificaImc()
        Pessoa.totalPessoas += 1;
    }

    set setNome(novoNome) {
        return this._nome = novoNome;
    }
    get getNome() {
        return this._nome;
    }

    set setIdade(novaIdade) {
        return this._idade = novaIdade;
    }
    get getIdade() {
        return this._idade;
    }

    set setPeso(novoPeso) {
        return this._peso = novoPeso;
    }
    get getPeso() {
        return this._peso;
    }

    set setAltura(novaAltura) {
        return this._altura = novaAltura;
    }
    get getAltura() {
        return this._altura;
    }

    get getImc() {
        return this._imc;
    }
    CalculaImc() {
        return (this._imc = this._peso / (this._altura * this._altura)).toFixed(2);
    }

    ClassificaImc() {
        let imc = this.CalculaImc();

        if (imc <= 18.5) {
            this._classificacao = 'Abaixo do Peso'
        } else if (imc <= 24.9) {
            this._classificacao = 'Peso Normal'
        } else if (imc <= 29.9) {
            this._classificacao = 'Sobrepeso'
        } else if (imc <= 34.9) {
            this._classificacao = 'Obesidade Grau 1'
        } else if (imc <= 39.9) {
            this._classificacao = 'Obesidade Grau 2'
        } else {
            this._classificacao = 'Obesidade Grau 3'
        }
        return imc;
    }
}