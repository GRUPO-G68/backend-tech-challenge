import { ProductRepositoryAdapter } from 'src/adapters/product/product.repository';
import { Product } from 'src/domain/entities/product.entity';

export class UpdateProductUseCase {
  constructor(
    private productRepositoryAdapter: ProductRepositoryAdapter,
  ) {}

  execute(product: Product) {
    return this.productRepositoryAdapter.update(product)
  }
}
