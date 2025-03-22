var pessoa = {
  idade: 12,
  nome: 'Lucas'
}

// funçao pura
function pegarQuantidadeDeAnosParaMaioridade(pessoa) {
  return 18 - pessoa.idade;
}

var quantidadeAnos = pegarQuantidadeDeAnosParaMaioridade(pessoa);

console.log(quantidadeAnos);

// funcao impura gera efeitos colaterais
function aumentarIdade(pessoa) {
  pessoa.idade = pessoa.idade + 1
  return pessoa
}