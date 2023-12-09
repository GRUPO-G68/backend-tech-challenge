import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { IClientRepository } from "../../application/ports/client.repository";
import { IClient } from "../../domain/entities/cliente.entity";
import { ClientRepositoryAdapter } from "./client.repository";

@Controller("clients")
export class ClientController {
  constructor(
    private readonly clientRepositoryAdapter: ClientRepositoryAdapter,
  ) {}
  @Post()
  async createClient(@Body() client: IClient): Promise<{ message: string }> {
    await this.clientRepositoryAdapter.save(client);
    return { message: "Cliente cadastrado com sucesso" };
  }

  @Get()
  findAllClients(): { message: string } {
    return { message: "Cliente cadastrado com sucesso" };
  }
  @Get(":clientDocument")
  filterClientByDocument(@Param() input: { clienteCpf: string }): {
    message: string;
  } {
    return { message: "Cliente cadastrado com sucesso" };
  }
}
