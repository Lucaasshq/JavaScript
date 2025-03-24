

interface Animal {
  sex: 'male' | 'female'
}

interface Humano extends Animal {
  nome:string
  idade:number
}

const pessoa: Humano = {
  nome: 'Lucas',
  idade: 21,
  sex: 'male'
}

