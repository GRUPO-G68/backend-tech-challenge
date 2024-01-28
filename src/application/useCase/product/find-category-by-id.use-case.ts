import { ProductCategoryRepositoryAdapter } from 'src/adapters/product/product-category.repository';

export class FindCategoryByIdUseCase {
  constructor(private productCategoryRepositoryAdapter: ProductCategoryRepositoryAdapter) {}

  execute(categoryId: string) {
    return this.productCategoryRepositoryAdapter.findById(categoryId);
  }
}
