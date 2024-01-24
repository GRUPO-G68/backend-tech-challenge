import { ProductRepositoryAdapter } from 'src/adapters/product/product.repository';

export class FindProductByIdUseCase {
  constructor(private productRepository: ProductRepositoryAdapter) {}

  execute(productId: string) {
    return this.productRepository.findById(productId);
  }
}
