// const pessoa = {
//   nome: 'Lucas',
//   idade: 19
// }

// function introduce({nome, idade}) {
//   console.log(`Olá, meu nome é ${nome} e eu tenho ${idade} anos`);
// }
// // Desestruturação de objeto
// introduce(pessoa);

// // Desestruturação de array
// const frutas = ['Banana', 'Morango', 'Manga'];

// const [fruta1, fruta2] = frutas;
// console.log(fruta1, fruta2);

//! Desestruturação de objeto

// const pessoa = {
//   nome: 'Lucas',
//   idade: 19,
//   contato: {
//     email: 'lucas@gmail.com'
//   }
// }

// const {nome, idade, contato: {email}} = pessoa;
// console.log(nome, idade, email);

//! Desestruturação de Arrays

// const frutas = ['Banana', 'Morango', 'Manga'];
// const [fruta1, fruta2, fruta3] = frutas;
// console.log(fruta1, fruta2, fruta3);

//! Desestruturação de Funcoes

function criarUsuario({nome, idade, email}) {
  return {
    nome,
    idade,
    contato: { email },
  };
}

const usuario = criarUsuario({
  nome: 'Lucas',
  idade: 19,
  email: 'lucas@gmail.com'})

console.log(usuario);