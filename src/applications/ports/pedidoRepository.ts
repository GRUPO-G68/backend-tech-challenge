import { Pedido } from "../../domain/entities/pedido";

export interface IProdutoRepository {
  findAll(): Promise<Array<Pedido> | null>;
  findById(idPedido: string): Promise<Pedido | null>;
  save(pedido: Pedido): Promise<string>;
}
