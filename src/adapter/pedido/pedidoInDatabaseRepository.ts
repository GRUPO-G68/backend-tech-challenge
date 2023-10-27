import { Pedido } from "../../domain/entities/pedido";
import { IProdutoRepository } from "../../applications/ports/pedidoRepository";
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

  async save(pedido: Pedido): Promise<void> {
    pedido;
    // return await this.db.query(
    //   `INSERT INTO Cliente ( nome, cpf, email) VALUES ('${pedido.nome}', '${pedido.cpf}', '${pedido.email}')`
    // );
  }
}
