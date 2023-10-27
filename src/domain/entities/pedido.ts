import { Produto } from "@prisma/client";

export interface ProdutoPedido extends Produto {
  quantidade: number;
}

export interface IPedido {
  id: string;
  cpfCliente: string;
  idSituacao: string;
  itens: ProdutoPedido[];
  // mudarSituacaoPedido(idSituacao: string): void;
}

export class Pedido implements IPedido {
  id: string;
  cpfCliente: string;
  idSituacao: string;
  itens: ProdutoPedido[];

  constructor(
    id: string,
    idSituacao: string,
    cpfCliente: string,
    itens: ProdutoPedido[]
  ) {
    this.id = id;
    this.idSituacao = idSituacao;
    this.cpfCliente = cpfCliente;
    this.itens = itens;
  }

  // mudarSituacaoPedido(idSituacao: string): void {
  //   this.idSituacao = idSituacao;
  // }
}
