//! Promise
// Uma Promise em JavaScript é um objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante.
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('😊');
    // reject('😢')
  }, 5000);
});

//! Recebendo o valor da Promise
function click() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Resolvida');
    }, 5000);
  });
}

//! Consumindo a Promise e recuperando o return da function
const resultado = click()
  .then((result)=> {
    console.log(result === 'Resolvida');
    console.log('Promise resolvida');
    return result;
  }).catch((error)=> {
    console.log('Promise rejeitada');
    console.log(error);
  })