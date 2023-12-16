import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductRepositoryAdapter } from './product.repository';
import { IProduct, Product, ProductStatusEnum } from '../../domain/entities/product.entity';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { CreateProductDto, UpdateProductDto } from './product.dtos';
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
  async findAllProducts(): Promise<IProduct[]> {
    return this.productRepository.findAll();
  }

  @Put(':productId')
  async updateProduct(@Param('productId') productId: string, @Body() inputDto: UpdateProductDto): Promise<void> {
    const existingProduct: Product = await this.productRepository.findById(productId);
    const product: Product = new Product(inputDto.name, inputDto.price, inputDto.category, inputDto.status, inputDto.description);
    await this.productRepository.update({ ...existingProduct, ...product });
  }

  // @todo implementar metodo

  // @todo implementar metodo

  // @todo implementar metodo
  @Get('categoria/:idCategoria')
  buscarProdutosPorCategoria(): { message: string } {
    return { message: 'Cliente cadastrado com sucesso' };
  }

  @Get(':idProduto')
  buscarProdutoPorId(): { message: string } {
    return { message: 'Cliente cadastrado com sucesso' };
  }
  // @todo implementar metodo
  @Delete(':idPedido')
  deletarPedidoPorId(@Param() input: { clienteCpf: string }): {
    message: string;
  } {
    return { message: 'Cliente cadastrado com sucesso' };
  }
}
