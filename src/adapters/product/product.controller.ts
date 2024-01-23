import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductRepositoryAdapter } from './product.repository';
import { IProduct, Product, ProductStatusEnum } from '../../domain/entities/product.entity';
import { ApiTags } from '@nestjs/swagger';
import { ProductCategoryRepositoryAdapter } from './product-category.repository';
import { ProductCategory } from '../../domain/entities/product-category.entity';
import { CreateProductPresenter } from './presenters/create-product.presenter';
import { UpdateProductPresenter } from './presenters/update-product.presenter';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';

import { FindProductByCategoryUseCase } from 'src/application/useCase/find-product-by-category.use-case';
// @todo Tratar excecao na controller
// @todo Melhorar Documentacao
// @todo Adicionar Dtos
// @todo Adicionar Validacao de Entrada
@ApiTags('Products')
@Controller('products')
export class ProductController {
  constructor(
    private readonly productRepository: ProductRepositoryAdapter,
    private readonly productCategoryRepository: ProductCategoryRepositoryAdapter,
  ) {}

  @Post()
  async createProduct(@Body() inputDto: CreateProductDto): Promise<CreateProductPresenter> {
    const { name, price, categoryId, description } = inputDto;
    const category: ProductCategory = await this.productCategoryRepository.findById(categoryId);
    const product: Product = new Product(name, price, category, ProductStatusEnum.ACTIVATED, description);
    return this.productRepository.save(product);
  }

  @Get()
  findAllProducts(): Promise<IProduct[]> {
    return this.productRepository.findAll();
  }

  @Get('category/:categoryId')
  filterProductsByCategory(@Param('categoryId') categoryId: string): Promise<IProduct[]> {
    const listProducts = new FindProductByCategoryUseCase().findProductByCategory(this.productRepository, categoryId);

    return listProducts;
  }

  @Get(':productId')
  findProductById(@Param('productId') productId: string): Promise<IProduct> {
    return this.productRepository.findById(productId);
  }

  // @todo ver o retorno em caso de falha
  @Put(':productId')
  async updateProduct(@Param('productId') productId: string, @Body() inputDto: UpdateProductDto): Promise<UpdateProductPresenter> {
    const existingProduct: Product = await this.productRepository.findById(productId);
    const category = await this.productCategoryRepository.findById(inputDto.category);
    if (!category) throw new Error(`Não existe a categoria com ID: ${category}`);
    const product: Product = new Product(inputDto.name, inputDto.price, category, inputDto.status, inputDto.description);
    await this.productRepository.update({ ...existingProduct, ...product });
    return { productWasUpdated: true };
  }

  // @todo ver o retorno em caso de falha
  @Delete(':productId')
  async deleteProduct(@Param('productId') productId: string): Promise<{ productWasDeleted: boolean }> {
    await this.productRepository.delete(productId);
    return { productWasDeleted: true };
  }
}
