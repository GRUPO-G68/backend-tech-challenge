import { IProduct } from '../../domain/entities/product.entity';

export interface IProductRepository {
  findAll(): Promise<IProduct[]>;
  findByCategory(categoryId: string): Promise<IProduct[]>;
  findById(productId: string): Promise<IProduct>;
  save(product: IProduct): Promise<{ productId: string }>;
  update(product: IProduct): Promise<void>;
  delete(productId: string): Promise<void>;
}
