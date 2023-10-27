import { Pedido } from "../../domain/entities/pedido";
import { IProdutoRepository } from "../../applications/ports/pedidoRepository";
import { clienteInDatabaseRepository } from "../cliente/clienteInDatabaseRepository";
import Database from "../../infra/database";

export class pedidoInDatabaseRepository implements IProdutoRepository {
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

  async findAll(): Promise<Array<Pedido> | null> {
    const pedidos = await this.db.query(
      `SELECT 
      p.*,
      s.descricao AS situacao 
    FROM Pedido AS p
      LEFT JOIN Situacao AS s ON s.id = p.idSituacao`
    );

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
