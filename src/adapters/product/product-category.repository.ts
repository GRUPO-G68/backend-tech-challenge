import { Injectable } from '@nestjs/common';
import { IProductCategoryRepository } from '../../application/ports/product-category-repository.port';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductCategory } from 'src/domain/entities/product-category.entity';

@Injectable()
export class ProductCategoryRepositoryAdapter implements IProductCategoryRepository {
  constructor(
    @InjectRepository(ProductCategory)
    private readonly productCategoryRepository: Repository<ProductCategory>,
  ) {}
  
  findAll(): Promise<ProductCategory[]> {
    return this.productCategoryRepository.find();
  }

  findById(categoryId: string): Promise<ProductCategory> {
    return this.productCategoryRepository.findOneBy({ id: categoryId });
  }

  async save(category: ProductCategory): Promise<{ categoryId: string }> {
    const { id: categoryId } = await this.productCategoryRepository.save(category);
    return { categoryId };
  }
}
