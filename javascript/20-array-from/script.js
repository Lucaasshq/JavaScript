//! forEach
function ola() {
  const args = Array.from(arguments);
  args.forEach((arg) => {
    console.log(`Olá, ${arg}!`);
  });
}

//! Array.of

const arr = Array.of(6, 2, 3, 4, 5, 6, 7, 8, 9, 10);
arr.forEach((item, index) => {
  console.log(item);
});

//! Array.from forEach

const frutas = ['Maçã', 'Banana', 'Pera', 'Uva', 'Melancia'];
function comer() {
  frutas.forEach((frutas, index) => {
    console.log(`Estou comendo ${frutas}, ${index}`);
  });
}

//! Array.from map
// serve para iterar e conseguir retornar um novo valor sem alterar o valor do array Original
const frutas2 = ['Maçã', 'Banana', 'Pera', 'Uva', 'Melancia'];
const map_frutas = frutas2.map((fruta) => {
  return fruta.toUpperCase();
});

//! Array.from filter
const estudantes = [
  { nome: 'Lucas',  grade: 8 },
  { nome: 'Mario',  grade: 2 },
  { nome: 'Jean',  grade: 10 },
  { nome: 'Rogerio',grade: 6 },
  { nome: 'Marcos', grade: 5 },
];

const aprovados = estudantes.filter((estudantes) => {
  return estudantes.grade >= 6
})

// Saída 
// 0 : {nome: 'Lucas', grade: 8}
// 1 : {nome: 'Jean', grade: 10}
// 2 : {nome: 'Rogerio', grade: 6}
// length: 3

//! Array.from reduce
const estudantes2 = [
  { nome: 'Lucas',  grade: 8 },
  { nome: 'Mario',  grade: 2 },
  { nome: 'Jean',  grade: 10 },
  { nome: 'Rogerio',grade: 6 },
  { nome: 'Marcos', grade: 5 },
];

const media = estudantes2.reduce(
  (prevValue, current) => {
    console.log(prevValue);
    console.log(current);
    return prevValue + current.grade;
  }, 0)

//! Array.from find

const estudantes3 = [
  { nome: 'Lucas',  grade: 8 },
  { nome: 'Mario',  grade: 8 },
  { nome: 'Jean',  grade: 10 },
  { nome: 'Rogerio',grade: 6 },
  { nome: 'Marcos', grade: 5 },
];

const aluno = estudantes3.find((estudantes) => {
  return estudantes.nome === 'Lucas';
})

//Saida 
// {nome: 'Lucas', grade: 8}

//! Array.from some

const convidados = [
  {nome: 'Lucas', idade: 23},
  {nome: 'Mario', idade: 17},
  {nome: 'Jean', idade: 30},
  {nome: 'Rogerio', idade: 28},
  {nome: 'Marcos', idade: 35},
]

// Verifica se existe algum convidado com idade maior ou igual a 18
const temAdultos = convidados.some((convidados) => {
  return convidados.idade >= 18;
})


//! Array.from every
// Verifica se todos os convidados são maiores de idade
const TodosAdultos = convidados.every((convidados) => {
  return convidados.idade >= 18;
})
