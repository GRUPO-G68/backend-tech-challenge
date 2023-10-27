import { Produto } from "@prisma/client";
import { Cliente } from "./clientes";

export interface IPedido {
  id: string;
  idSituacao: string;
  itens: Produto[];
  cliente: Cliente;
  // mudarSituacaoPedido(idSituacao: string): void;
}

export class Pedido implements IPedido {
  id: string;
  cliente: Cliente;
  idSituacao: string;
  itens: Produto[];

  constructor(id: string, idSituacao: string, cliente: Cliente) {
    this.id = id;
    this.idSituacao = idSituacao;
    this.cliente = cliente;
    this.itens = [];
  }

  // mudarSituacaoPedido(idSituacao: string): void {
  //   this.idSituacao = idSituacao;
  // }
}
