import { Injectable } from '@nestjs/common';
import { IProductCategoryRepository } from '../../application/ports/product-category-repository.port';

@Injectable()
export class ProductCategoryRepositoryAdapter implements IProductCategoryRepository {
  findAll(): Promise<any[]> {
    return Promise.resolve([]);
  }

  findById(categoryId: string): Promise<any> {
    return Promise.resolve(undefined);
  }

  save(category: any): Promise<{ categoryId: string }> {
    return Promise.resolve({ categoryId: '' });
  }
}
