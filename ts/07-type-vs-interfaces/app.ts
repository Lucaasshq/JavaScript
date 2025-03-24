interface Animal {
  sexo: 'male' | 'female'
  fome: boolean
  idade: number
}

interface Mamifero extends Animal {
  desmamado: boolean,
}

type Pessoa = {
  nome: string,
  idade:number
}

const gato: Mamifero = {
  sexo: 'male',
  fome: true,
  desmamado: false,
  idade: 0.5
}