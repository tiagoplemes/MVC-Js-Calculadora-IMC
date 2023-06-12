import { PessoaController } from "./api/controllers/PessoaController.js";

let pessoaController = new PessoaController()
// CONTROLAR ENVIO DO FORMULARIO E EXIBIÇÃO NA TABELA   

let formulario = document.querySelector('form')
//capturando formulario html para o javascript manipular

//Escutador de evento no formulario 
formulario.addEventListener('submit', (event) => {

    // adiciona pessoa
    pessoaController.adiciona(event)

    // limpar formulario
    pessoaController._limpaFormulario()
})