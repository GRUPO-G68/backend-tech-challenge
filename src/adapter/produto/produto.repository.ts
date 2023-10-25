import { Produto } from "../../domain/entities/produto";
export interface IProdutoRepository {
  findById(id: string): Promise<Produto | null>;
  save(produto: Produto): void;
}
