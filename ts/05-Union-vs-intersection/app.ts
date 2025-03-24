type Cpf = string | number

function findPerson(cpf: Cpf) {
  if (typeof cpf === 'string') {
    cpf.toUpperCase
    return cpf
  }

  return cpf
}

const p = findPerson('123');
const p2 = findPerson(123)

console.log(p)

console.log(p2)

//! mais exemplos

type Animal = {sex: 'male' | 'female'}
type Humano = {fome: boolean}

type Pessoa = Animal & Humano

function getStatus(pessoa: Pessoa) {
  return pessoa.sex = 'male'
}