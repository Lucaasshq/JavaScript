class Humano {
  fome = true;
  dormindo = false;

  comer () {
    console.log('Estou comendo');
    return this.fome = false;
  }
}

Humano.prototype.dormir = function() {
  console.log("Estoy durmiendo");
  return this.dormindo = true;
}




const pessoa = new Humano();
pessoa.comer();
console.log(pessoa);
pessoa.dormir();
