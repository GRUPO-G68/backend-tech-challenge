import { ProductRepositoryAdapter } from 'src/adapters/product/product.repository';

export class DeleteProductUseCase {
  constructor(private productRepositoryAdapter: ProductRepositoryAdapter) {}

  execute(productId: string) {
    return this.productRepositoryAdapter.delete(productId);
  }
}
