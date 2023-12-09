import { Controller, Get, Param, Post } from "@nestjs/common";

@Controller("clientes")
export class ClienteController {
  @Post()
  criarCliente(): { message: string } {
    return { message: "Cliente cadastrado com sucesso" };
  }

  @Get()
  buscarTodosClientes(): { message: string } {
    return { message: "Cliente cadastrado com sucesso" };
  }
  @Get(":clienteCpf")
  buscarClientePorCPF(@Param() input: { clienteCpf: string }): {
    message: string;
  } {
    return { message: "Cliente cadastrado com sucesso" };
  }
}
