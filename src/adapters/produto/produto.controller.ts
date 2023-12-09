import { Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller("produtos")
export class ProdutoController {
  @Post()
  criarPedido(): { message: string } {
    return { message: "Cliente cadastrado com sucesso" };
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
