const nome = 'Julio'
const idade = 32

const sentenca = 'Olá, meu nome é ' + nome + ' e eu tenho ' + idade + ' anos'

const sentenca2 = `Olá meu nome é ${nome} e eu tenho ${idade} anos`

console.log(sentenca)
console.log(sentenca2)

const html = `
  <ul>
    <li>${nome}</li>
    <li>${idade}</li>
  </ul>
  `

  console.log(html)