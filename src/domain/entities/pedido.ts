export interface IPedido {
  id: string;
  idSituacao: string;
  
}

export class Pedido implements IPedido {
  id: string;
  idSituacao: string;

  constructor(id: string, idSituacao: string) {
    this.id = id;
    this.idSituacao = idSituacao;
  }
}
