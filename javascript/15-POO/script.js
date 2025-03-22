//! Estrutura de class em javaScript
// class Humano {
//   fome = true;
//   //Método
//   comer() {
//     console.log('Estou comendo');
//     return this.fome = false;
//   }
// }

// const pessoa = new Humano();
// pessoa.comer();

// const pessoa2 = new Humano();
// pessoa2.comer();
// console.log(pessoa2); // false

//! Métodos e propriedades de uma classe

// class Humano {
//   fome = true;

//   //Método
//   comer() {
//     this.fome = false;
//     console.log('Estou comendo');
//   }
// }

// const pessoa = new Humano();
// pessoa.comer();
// console.log(pessoa)

//! Construtor
// class Humano {
//   nome;
//   idade;
//   sexo;

//   constructor(props) {
//     this.nome = props.nome;
//     this.idade = props.idade;
//     this.sexo = props.sexo;
//   }

//   dados() {
//     console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`);
//   }
// }

const pessoa = new Humano({
  nome: 'Lucas',
  idade: 21,
  sexo: 'Masculino',
});
console.log(pessoa);
pessoa.dados();

