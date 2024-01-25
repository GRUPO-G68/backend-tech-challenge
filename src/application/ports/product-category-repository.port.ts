import { ProductCategory } from "src/domain/entities/product-category.entity";

export interface IProductCategoryRepository {
  save(category: ProductCategory): Promise<{ categoryId: string }>;
  findAll(): Promise<ProductCategory[]>;
  findById(categoryId: string): Promise<ProductCategory>;
}
