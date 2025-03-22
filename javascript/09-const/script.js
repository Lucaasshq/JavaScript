// Não pode redeclarar tipos constantes
// Apesar de ser constante o valor ainda pode variar
const idade = 12 ;


// O valor ainda pode alterar mesmo sendo constante
const eu = {
  nome: 'Lucas',
  idade: 21
}

eu.idade = 22
console.log(eu.idade)
// Saída 22


const lista = [1, 2, 3, 4, 5]
lista.push("Batata")
console.log(lista)
// Saída [1, 2, 3, 4, 5, "Batata"]