import { Produto } from "../../domain/entities/produto";
import { IProdutoRepository } from "../../applications/ports/produtoRepository";
import Database from "../../infra/database";

export class produtoInDatabaseRepository implements IProdutoRepository {
  db: Database;
  constructor() {
    this.db = new Database();
  }

  async findAll(): Promise<Array<Produto> | null> {
    return await this.db.query(
      "SELECT id, idCategoria, preco, nome, descricao, createdAt, updatedAt FROM Produto WHERE status = 1"
    );
  }

  async findById(idProduto: string): Promise<Array<Produto> | null> {
    return await this.db.query(
      `SELECT id, idCategoria, preco, nome, descricao, createdAt, updatedAt FROM Produto WHERE status = 1 AND id = ${idProduto}`
    );
  }

  async findByCategory(idCategoria: string): Promise<Array<Produto> | null> {
    return await this.db.query(
      `SELECT id, idCategoria, preco, nome, descricao, createdAt, updatedAt FROM Produto WHERE status = 1 AND idCategoria = ${idCategoria}`
    );
  }

  async save(produto: Produto): Promise<void> {
    return await this.db.query(
      `INSERT INTO Produto (descricao, idCategoria, nome, preco) VALUES ('${produto.descricao}',${produto.idCategoria},'${produto.nome}','${produto.preco}')`
    );
  }

  async update(produto: Produto): Promise<void> {
    return await this.db.query(
      `UPDATE Produto SET descricao = '${produto.descricao}', idCategoria = '${produto.idCategoria}', nome = '${produto.nome}', preco = ${produto.preco} WHERE id = ${produto.id}`
    );
  }

  async delete(idProduto: string): Promise<void> {
    return await this.db.query(
      `UPDATE Produto SET status = '0' WHERE id = ${idProduto}`
    );
  }
}
