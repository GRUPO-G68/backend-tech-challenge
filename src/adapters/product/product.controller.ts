import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductRepositoryAdapter } from './product.repository';
import { IProduct, Product, ProductStatusEnum } from '../../domain/entities/product.entity';
import { ApiTags } from '@nestjs/swagger';
import { CreateProductDto, UpdateProductDto } from './product.dtos';
import { FindProductByCategoryUseCase } from 'src/application/useCase/find-product-by-category.use-case';
// @todo Tratar excecao na controller
// @todo Melhorar Documentacao
// @todo Adicionar Dtos
// @todo Adicionar Validacao de Entrada
@ApiTags('Products')
@Controller('products')
export class ProductController {
  constructor(private readonly productRepository: ProductRepositoryAdapter) {}
  @Post()
  async createProduct(@Body() inputDto: CreateProductDto): Promise<{ productId: string }> {
    const { name, price, category, description } = inputDto;
    const status: ProductStatusEnum.ACTIVATED = ProductStatusEnum.ACTIVATED;
    const product: Product = new Product(name, price, category, status, description);
    return this.productRepository.save(product);
  }

  @Get()
  findAllProducts(): Promise<IProduct[]> {
    return this.productRepository.findAll();
  }

  @Get('category/:categoryId')
  filterProductsByCategory(@Param('categoryId') categoryId: number): Promise<IProduct[]> {
    const listProducts = new FindProductByCategoryUseCase().findProductByCategory(this.productRepository,categoryId)

    return listProducts;
  }

  @Get(':productId')
  findProductById(@Param('productId') productId: string): Promise<IProduct> {
    return this.productRepository.findById(productId);
  }

  // @todo ver o retorno em caso de falha
  @Put(':productId')
  async updateProduct(@Param('productId') productId: string, @Body() inputDto: UpdateProductDto): Promise<{ productWasUpdated: boolean }> {
    const existingProduct: Product = await this.productRepository.findById(productId);
    const product: Product = new Product(inputDto.name, inputDto.price, inputDto.category, inputDto.status, inputDto.description);
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
