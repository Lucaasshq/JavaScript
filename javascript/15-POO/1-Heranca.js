//! Herança
class Animal {
  sexo;

  constructor(props) {
    this.sexo = props.sexo
  }
}

class Humano extends Animal {
  nome;
  idade;
  fome = true;

  constructor(props) {
    super(props);
    this.nome = props.nome;
    this.idade = props.idade;
  }

  dados() {
    console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos e meu sexo é ${this.sexo}`);
  }
}

const pessoa = new Humano({
  nome: 'Lucas',
  idade: 21,
  sexo: 'Masculino',
});


console.log(pessoa);
pessoa.dados();