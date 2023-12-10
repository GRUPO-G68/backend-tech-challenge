import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { ProductRepositoryAdapter } from "./product.repository";
import { Product } from "../../domain/entities/product.entity";
import { ApiTags } from "@nestjs/swagger";
// @todo Tratar excecao na controller
// @todo Melhorar Documentacao
// @todo Adicionar Dtos
// @todo Adicionar Validacao de Entrada
@ApiTags("Products")
@Controller("products")
export class ProductController {
  constructor(private readonly productRepository: ProductRepositoryAdapter) {}
  @Post()
  async createProduct(
    @Body() product: Product,
  ): Promise<{ productId: string }> {
    return this.productRepository.save(product);
  }

  // @todo implementar metodo
  @Put()
  alterarPedido(): { message: string } {
    return { message: "Cliente cadastrado com sucesso" };
  }
  // @todo implementar metodo
  @Get()
  buscarTodosProdutos(): { message: string } {
    return { message: "Cliente cadastrado com sucesso" };
  }
  // @todo implementar metodo
  @Get("categoria/:idCategoria")
  buscarProdutosPorCategoria(): { message: string } {
    return { message: "Cliente cadastrado com sucesso" };
  }

  @Get(":idProduto")
  buscarProdutoPorId(): { message: string } {
    return { message: "Cliente cadastrado com sucesso" };
  }
  // @todo implementar metodo
  @Delete(":idPedido")
  deletarPedidoPorId(@Param() input: { clienteCpf: string }): {
    message: string;
  } {
    return { message: "Cliente cadastrado com sucesso" };
  }
}
