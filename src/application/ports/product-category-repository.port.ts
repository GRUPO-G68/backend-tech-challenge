export interface IProductCategoryRepository {
  save(category: any): Promise<{ categoryId: string }>;
  findAll(): Promise<any[]>;
  findById(categoryId: string): Promise<any>;
}
