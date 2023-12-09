import { Controller, Get, Param, Post } from "@nestjs/common";

@Controller("pedidos")
export class PedidoController {
  @Post()
  criarPedido(): { message: string } {
    return { message: "Cliente cadastrado com sucesso" };
  }

  @Get()
  buscarTodosPedidos(): { message: string } {
    return { message: "Cliente cadastrado com sucesso" };
  }
  @Get(":idPedido")
  buscarPedidoPorId(@Param() input: { clienteCpf: string }): {
    message: string;
  } {
    return { message: "Cliente cadastrado com sucesso" };
  }

  @Get("situacao/:idSituacao")
  buscaSituacaoDoPedido(@Param() input: { clienteCpf: string }): {
    message: string;
  } {
    return { message: "Cliente cadastrado com sucesso" };
  }
}
