//! Rest Operator
// O Rest Operator permite representar um número indefinido de argumentos como um array.
// Ele é utilizado em funções, arrays ou objetos para coletar múltiplos valores.

function criarUsuario(nome, idade, ...contatos) {
  return {
    nome,
    idade,
    contatos
  }
}


const usuario = criarUsuario('Lucas', 23, 'contato1', 'contato2', 'contato3', 'contato4')
console.log(usuario)
//? Output: { nome: 'Lucas', idade: 23, contatos: [ 'contato1', 'contato2', 'contato3', 'contato4' ] }