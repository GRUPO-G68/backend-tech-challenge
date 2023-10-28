import { Pedido } from "../../domain/entities/pedido";
import { IPedidoRepository } from "../../applications/ports/pedidoRepository";
import { clienteInDatabaseRepository } from "../cliente/clienteInDatabaseRepository";
import Database from "../../infra/database";

export class PedidoInDatabaseRepository implements IPedidoRepository {
  db: Database;
  constructor() {
    this.db = new Database();
  }
  private async itensPedido(idPedido: string) {
    const itens = await this.db.query(
      `SELECT * FROM PedidoItem WHERE idPedido = ${idPedido}`
    );
    return itens;
  }

  async findAll(idSituacao?: string): Promise<Array<Pedido> | null> {
    let query = `SELECT 
                    p.*,
                    s.descricao AS situacao 
                  FROM Pedido AS p
                  LEFT JOIN Situacao AS s ON s.id = p.idSituacao`;

    if (idSituacao) {
      query += ` WHERE p.idSituacao = '${idSituacao}'`;
    }

    const pedidos = await this.db.query(query);

    for (const pedidoCliente of pedidos) {
      pedidoCliente.itens = await this.itensPedido(pedidoCliente.id);
    }

    return pedidos;
  }

  async findById(id: string): Promise<Pedido | null> {
    const pedido = await this.db.query(
      `SELECT 
      p.*,
      s.descricao AS situacao 
    FROM Pedido AS p
      LEFT JOIN Situacao AS s ON s.id = p.idSituacao WHERE p.id = ${id}`
    );
    pedido[0].itens = await this.itensPedido(id);
    return pedido;
  }

  async updateSituationOrder(id: string, idSituacao: string): Promise<string> {
    await this.db.query(
      `UPDATE Pedido
      SET idSituacao = ${idSituacao}
      where
        id = ${id}`
    );
    return "Pedido atualizado com sucesso";
  }

  async save(pedido: Pedido): Promise<string> {
    const cliente = await new clienteInDatabaseRepository().findByCpf(
      pedido.cpfCliente
    );

    if (cliente === null || Object.keys(cliente as object).length == 0) {
      return "Cliente não encontrado";
    }

    const pedidoResult = await this.db.query(
      `INSERT INTO Pedido ( idCliente, idSituacao ) VALUES ('${cliente.id}', '1')`
    );
    const idPedido = pedidoResult.insertId;

    for (const prop in pedido.itens) {
      const item = pedido.itens[prop];
      await this.db.query(
        `INSERT INTO PedidoItem ( idPedido, idProduto, quantidade ) VALUES ('${idPedido}','${item.id}', '${item.quantidade}')`
      );
    }

    return "Pedido realizado com sucesso";
  }
}
