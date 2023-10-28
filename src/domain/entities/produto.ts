export interface IProduto {
  id: string;
  nome: string;
  descricao: string;
  idCategoria: string;
  preco: string;
  createdAt: string;
  updatedAt: string;
  status: number;
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
}
