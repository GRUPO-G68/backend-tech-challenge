import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Client, IClient } from '../../domain/entities/client.entity';
import { ClientRepositoryAdapter } from './client.repository';
import { ApiTags } from '@nestjs/swagger';
import { CreateClientDto } from './client.dtos';

// @todo Tratar excecao na controller
// @todo Melhorar Documentacao
// @todo Adicionar Dtos
// @todo Adicionar Validacao de Entrada
@ApiTags('Clients')
@Controller('clients')
export class ClientController {
  constructor(private readonly clientRepositoryAdapter: ClientRepositoryAdapter) {}
  @Post()
  async createClient(@Body() inputDto: CreateClientDto): Promise<{ clientId: string }> {
    const { name, document, email } = inputDto;
    const client: Client = new Client(name, email, document);
    return this.clientRepositoryAdapter.save(client);
  }

  @Get()
  async findAllClients(): Promise<IClient[]> {
    return this.clientRepositoryAdapter.findAll();
  }
  @Get(':clientDocument')
  async filterClientByDocument(@Param('clientDocument') clientDocument: string): Promise<IClient> {
    return this.clientRepositoryAdapter.findByDocument(clientDocument);
  }
}
