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
  @Put()
  alterarPedido(): { message: string } {
    return { message: "Cliente cadastrado com sucesso" };
  }
  @Get()
  buscarTodosProdutos(): { message: string } {
    return { message: "Cliente cadastrado com sucesso" };
  }
  @Get("categoria/:idCategoria")
  buscarProdutosPorCategoria(): { message: string } {
    return { message: "Cliente cadastrado com sucesso" };
  }

  @Get(":idProduto")
  buscarProdutoPorId(): { message: string } {
    return { message: "Cliente cadastrado com sucesso" };
  }
  @Delete(":idPedido")
  deletarPedidoPorId(@Param() input: { clienteCpf: string }): {
    message: string;
  } {
    return { message: "Cliente cadastrado com sucesso" };
  }
}
