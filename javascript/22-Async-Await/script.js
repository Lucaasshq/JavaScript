//! Async/Await
// async e await são recursos do JavaScript que facilitam o trabalho com código assíncrono, tornando-o mais legível e organizado. Eles são usados para lidar com promises de forma mais intuitiva, evitando o uso excessivo de .then() e .catch(), que podem deixar o código difícil de entender.
function dormir(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), ms);
  });
}

async function click() {
  await dormir(5000);
  console.log('Promise resolvida');
  return 'Resolvida';
}

//! Multiplas promises em paralelo com Promisse.all
// O método Promise.all(iterable) retorna uma única Promise que resolve quando todas as promises no argumento iterável forem resolvidas ou quando o iterável passado como argumento não contiver promises.
const url = 'https://jsonplaceholder.typicode.com';

async function getTodos() {
 const promises = Promise.all([
    fetch(`${url}/todos/1`).then((response) => response.json()),
    fetch(`${url}/todos/2`).then((response) => response.json()),
    fetch(`${url}/todos/3`).then((response) => response.json()),
  ]);
  return promises;
  
}

const todos = getTodos();



//! Promise chaining

const url2 = 'https://jsonplaceholder.typicode.com';
const data = fetch(`${url2}/todos/1`)
  .then((response) => response.json())
  .then((data) => console.log(data))