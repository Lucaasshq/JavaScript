function sum(a, b) {
  console.log(this);
  return a + b;
}

const eu = {
  nome: 'Lucas',
};

// Saida
// sum.call(eu, 1,1)
// script.js:2 {nome: 'Lucas'}
// 2
// sum.apply(eu, [1,2])
// script.js:2 {nome: 'Lucas'}
// 3