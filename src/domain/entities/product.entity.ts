export interface IProduct {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  status: string;
  createdAt: string;
  updatedAt: string;
}

// @todo adicionar anotaçoes para o banco de dados
export class Product implements IProduct {
  id: string;
  category: string;
  description: string;
  name: string;
  price: number;
  status: string;
  createdAt: string;
  updatedAt: string;
}
