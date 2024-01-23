import { ProductRepositoryAdapter } from 'src/adapters/product/product.repository';

export class FindProductByCategoryUseCase {
  findProductByCategory(repo: ProductRepositoryAdapter, categoryId: string) {
    return repo.findByCategory(categoryId);
  }
}
