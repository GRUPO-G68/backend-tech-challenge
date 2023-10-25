import { Produto } from "../../domain/entities/produto";
import { IProdutoRepository } from "./produto.repository";
export class ProdutoInMemoryRepository implements IProdutoRepository {
  private produtos: Map<string, Produto> = new Map();

  async findById(id: string): Promise<Produto | null> {
    return this.produtos.get(id) || null;
  }

  async save(produto: Produto): Promise<void> {
    this.produtos.set(produto.id, produto);
  }
}
