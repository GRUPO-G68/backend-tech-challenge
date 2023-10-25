export interface IProduto {
  id: string;
  nome: string;
  descricao: string;
  idCategoria: string;
  preco: string;
  createdAt: string;
  updatedAt: string;
  status: number;

  criarProduto(produto: Produto): void;
  editarProduto(produto: Produto): void;
  desabilitarProduto(id: string): void;
}

export class Produto implements IProduto {
  id!: string;
  nome!: string;
  descricao!: string;
  idCategoria!: string;
  preco!: string;
  createdAt!: string;
  updatedAt!: string;
  status!: number;

  constructor(
    id: string,
    nome: string,
    descricao: string,
    idCategoria: string,
    preco: string,
    createdAt: string,
    updatedAt: string,
    status: number
  ) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.idCategoria = idCategoria;
    this.preco = preco;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.status = status;
  }

  criarProduto(produto: Produto): void {
    throw new Error("Method not implemented.");
  }
  editarProduto(produto: Produto): void {
    throw new Error("Method not implemented.");
  }
  desabilitarProduto(id: string): void {
    throw new Error("Method not implemented.");
  }
}
