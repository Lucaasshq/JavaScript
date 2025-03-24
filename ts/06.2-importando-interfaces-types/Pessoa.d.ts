

declare namespace Pessoa {
  type Email = string
  export interface Default {
    nome:string
    idade:number
  }

  export interface ComContatos extends Default {
    contatos: Email[]
  }
}

