export interface ICliente {
  id: string;
  nome: string;
  cpf: string;
  email: string;
}

export class Cliente implements ICliente{
    id:string;
    nome:string;
    email:string;
    cpf:string;

    constructor(id: string, nome: string, email: string, cpf: string){
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
    }
}