import { Produto } from "../../domain/entities/produto";

export interface IProdutoRepository {
  findAll(): Promise<Array<Produto> | null>;
  findById(idProduto: string): Promise<Array<Produto> | null>;
  findByCategory(idCategoria: string): Promise<Array<Produto> | null>;
  save(produto: Produto): Promise<void>;
  update(produto: Produto): Promise<void>;
}
