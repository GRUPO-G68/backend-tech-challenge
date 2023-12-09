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
