import { Pedido } from "../../domain/entities/pedido";

export interface IPedidoRepository {
  findAll(): Promise<Array<Pedido> | null>;
  findById(idPedido: string): Promise<Pedido | null>;
  save(pedido: Pedido): Promise<string>;
  updateSituationOrder(id: string, idSituacao: string): Promise<string>;
}
