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

import { FindProductByCategoryUseCase } from 'src/application/useCase/product/find-product-by-category.use-case';
import { FindAllProductsUseCase } from 'src/application/useCase/product/find-all-products.use-case';
import { FindProductByIdUseCase } from 'src/application/useCase/product/find-product-by-id.use-case';
import { CreateProductUseCase } from 'src/application/useCase/product/create-product.use-case';
import { FindCategoryByIdUseCase } from 'src/application/useCase/product/find-category-by-id.use-case';
import { UpdateProductUseCase } from 'src/application/useCase/product/update-product.use-case';
import { DeleteProductUseCase } from 'src/application/useCase/product/delete-product.use-case';
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
    return new CreateProductUseCase(this.productRepository).execute(product);
  }

  @Get()
  findAllProducts(): Promise<IProduct[]> {
    return new FindAllProductsUseCase(this.productRepository).execute();
  }

  @Get('category/:categoryId')
  filterProductsByCategory(@Param('categoryId') categoryId: string): Promise<IProduct[]> {
    return new FindProductByCategoryUseCase(this.productRepository).findProductByCategory(categoryId);
  }

  @Get(':productId')
  findProductById(@Param('productId') productId: string): Promise<IProduct> {
    return new FindProductByIdUseCase(this.productRepository).execute(productId);
  }

  // @todo ver o retorno em caso de falha
  @Put(':productId')
  async updateProduct(@Param('productId') productId: string, @Body() inputDto: UpdateProductDto): Promise<UpdateProductPresenter> {
    const existingProduct: Product = await new FindProductByIdUseCase(this.productRepository).execute(productId);
    const category = await new FindCategoryByIdUseCase(this.productCategoryRepository).execute(inputDto.category);
    if (!category) throw new Error(`Não existe a categoria com ID: ${category}`);
    const product: Product = new Product(inputDto.name, inputDto.price, category, inputDto.status, inputDto.description);
    await new UpdateProductUseCase(this.productRepository).execute({...existingProduct, ...product})
    return { productWasUpdated: true };
  }

  // @todo ver o retorno em caso de falha
  @Delete(':productId')
  async deleteProduct(@Param('productId') productId: string): Promise<{ productWasDeleted: boolean }> {
    await new DeleteProductUseCase(this.productRepository).execute(productId)
    return { productWasDeleted: true };
  }
}
