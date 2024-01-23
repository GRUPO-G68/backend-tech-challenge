import { Injectable } from '@nestjs/common';
import { IProductRepository } from '../../application/ports/product-repository.port';
import { IProduct, Product } from '../../domain/entities/product.entity';
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

  async findAll(): Promise<IProduct[]> {
    return this.productRepository.find({ relations: ['category'] });
  }

  async findByCategory(categoryId: string): Promise<IProduct[]> {
    return this.productRepository.find({ where: { category: { id: categoryId } } });
  }

  async findById(productId: string): Promise<IProduct> {
    return this.productRepository.findOne({ where: { id: productId }, relations: ['category'] });
  }

  async update(product: Product): Promise<void> {
    await this.productRepository.update(product.id, product);
  }

  async delete(productId: string): Promise<void> {
    await this.productRepository.delete(productId);
  }
}
