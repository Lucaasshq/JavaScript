var eu = {
  nome: 'Lucas',
  idade: 21
}

function checarIdade(pessoa) {
  if (pessoa.idade < 18) {
    return 'menor de idade';
  } else {
    return 'maior de idade';
  }
}

console.log(checarIdade(eu))