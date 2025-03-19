const pessoa = {
  nome: 'Lucas',
  idade: 19
}

function introduce({nome, idade}) {
  console.log(`Olá, meu nome é ${nome} e eu tenho ${idade} anos`);
}
// Desestruturação de objeto
introduce(pessoa);

// Desestruturação de array
const frutas = ['Banana', 'Morango', 'Manga'];

const [fruta1, fruta2] = frutas;
console.log(fruta1, fruta2);




