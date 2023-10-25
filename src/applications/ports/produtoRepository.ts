import { Produto } from "../../domain/entities/produto";

export interface IProdutoRepository {
  findAll(): Promise<Array<Produto> | null>;
  findById(idProduto: string): Promise<Produto | null>;
  findByCategory(categoria: string): Promise<Produto | null>;
  save(produto: Produto): Promise<void>;
}
