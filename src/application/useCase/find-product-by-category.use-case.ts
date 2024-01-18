import { ProductRepositoryAdapter } from "src/adapters/product/product.repository";

export class FindProductByCategoryUseCase {
    findProductByCategory(repo: ProductRepositoryAdapter, categoryId: number) {
        return repo.findByCategory(categoryId)
    }
}