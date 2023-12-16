import { Injectable } from '@nestjs/common';
import { IProductRepository } from '../../application/ports/product-repository.port';
import { IProduct, Product } from 'src/domain/entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// @todo implementar os metodos e injetar o repository modelo para comunicar com o db
@Injectable()
export class ProductRepositoryAdapter implements IProductRepository {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}
  async save(product: Product): Promise<{ productId: string }> {
    const { id: productId } = await this.productRepository.save(product);
    return { productId };
  }

  delete(productId: string): Promise<void> {
    return Promise.resolve(undefined);
  }

  findAll(): Promise<IProduct[]> {
    return this.productRepository.find();
  }

  findByCategory(categoryId: string): Promise<IProduct[]> {
    return Promise.resolve([]);
  }

  findById(productId: string): Promise<IProduct> {
    return Promise.resolve(undefined);
  }

  update(product: IProduct): Promise<void> {
    return Promise.resolve(undefined);
  }
}
