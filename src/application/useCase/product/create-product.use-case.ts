import { ProductRepositoryAdapter } from 'src/adapters/product/product.repository';
import { Product } from 'src/domain/entities/product.entity';

export class CreateProductUseCase {
  constructor(private productRepositoryAdapter: ProductRepositoryAdapter) {}

  execute(product: Product) {
    return this.productRepositoryAdapter.save(product);
  }
}
