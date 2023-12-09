import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { IClient } from "../../domain/entities/client.entity";
import { ClientRepositoryAdapter } from "./client.repository";
import { ApiTags } from "@nestjs/swagger";
@ApiTags("Clients")
@Controller("clients")
export class ClientController {
  constructor(
    private readonly clientRepositoryAdapter: ClientRepositoryAdapter,
  ) {}
  @Post()
  async createClient(@Body() client: IClient): Promise<{ clientId: string }> {
    return this.clientRepositoryAdapter.save(client);
  }

  @Get()
  async findAllClients(): Promise<IClient[]> {
    return this.clientRepositoryAdapter.findAll();
  }
  @Get(":clientDocument")
  async filterClientByDocument(
    @Param("clientDocument") clientDocument: string,
  ): Promise<IClient> {
    return this.clientRepositoryAdapter.findByCpf(clientDocument);
  }
}
