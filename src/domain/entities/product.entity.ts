export interface IProduct {
  id: string;
  name: string;
  descriptions: string;
  category: number;
  price: string;
  status: number;
  createdAt: string;
  updatedAt: string;
}

// @todo adicionar anotaçoes para o banco de dados
export class Product implements IProduct {
  id: string;
  category: number;
  descriptions: string;
  name: string;
  price: string;
  status: number;
  createdAt: string;
  updatedAt: string;
}
