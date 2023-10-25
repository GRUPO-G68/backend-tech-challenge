import { PrismaClient } from "@prisma/client";
import { Produto } from "../../domain/entities/produto";
import { IProdutoRepository } from "../../applications/ports/produtoRepository";
import Database from "../../infra/database";

export class produtoInDatabaseRepository implements IProdutoRepository {
  db: Database;
  constructor() {
    this.db = new Database();
  }

  async findAll(): Promise<Array<Produto> | null> {
    return await this.db.query("SELECT * FROM Produto");
  }

  async findById(idProduto: string): Promise<Produto | null> {
    return await this.db.query(`SELECT * FROM Produto WHERE id = ${idProduto}`);
  }

  async findByCategory(categoria: string): Promise<Produto | null> {
    return await this.db.query(
      `SELECT * FROM Produto WHERE categoria = ${categoria}`
    );
  }

  async save(produto: Produto): Promise<void> {
    return await this.db.query(
      `INSERT INTO Produto VALUES (${produto.createdAt},${produto.descricao},${produto.id},${produto.idCategoria},${produto.nome},${produto.preco},${produto.status},${produto.updatedAt}`
    );
  }
}
