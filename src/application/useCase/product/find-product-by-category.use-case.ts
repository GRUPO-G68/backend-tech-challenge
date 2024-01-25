import { ProductRepositoryAdapter } from 'src/adapters/product/product.repository';

export class FindProductByCategoryUseCase {
  constructor(private productRepositoryAdapter: ProductRepositoryAdapter) {}
  
  findProductByCategory( categoryId: string) {
    return this.productRepositoryAdapter.findByCategory(categoryId);
  }
}
