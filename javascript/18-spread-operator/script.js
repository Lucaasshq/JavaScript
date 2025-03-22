// const partes = ['ombro', 'joelhos', 'pés', 'e', 'toes'];
// const setenca = ['cabeça', partes[0], partes[1], 'pés', ...partes]

// console.log(setenca)	
// function createUser (nome, idade, ...contatos) {
//   return {
//     nome,
//     idade,
//     contatos
//   }
// }

// console.log(createUser())

// const arrayImutavel = ['select', '*', 'from', 'posts']
// const arrayMutavel = [...arrayImutavel]
// arrayMutavel.push('where id = 1')
// console.log(arrayMutavel)
// console.log(arrayImutavel)

//! Clonado Objetos com spread operator

// const usuario = {
//   nome: 'Lucas',
//   email: 'Lucas@gmail.com'
// }

// // Clone do Objeto
// const novoUsuario = {...usuario}

// novoUsuario.nome = 'joao silva'
// novoUsuario.email = 'joao@gmail.com'
// console.log(usuario)
// console.log(novoUsuario)



//! Arrays com spread operator
// const partes = ['ombro', 'joelho']
// const sentenca = ['cabeça', 'pé']

// const novaSentenca = [...partes, ...sentenca]
// console.log(novaSentenca)

// //! clone de array
// const array = [...novaSentenca]


//! Ultilizando Spread dentro de parametro de funções
const ingredientes = ['ovo', 'farinha', 'leite']
const temperos = ['sal', 'pimenta', 'cheiro verde']

ingredientes.push(...temperos)
console.log(ingredientes)