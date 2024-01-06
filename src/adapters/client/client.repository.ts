import { Client } from '../../domain/entities/client.entity';
import { IClientRepository } from '../../application/ports/client-repository.port';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
// @todo implementar os metodos
@Injectable()
export class ClientRepositoryAdapter implements IClientRepository {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  async save(client: Client): Promise<{ clientId: string }> {
    const { id: clientId } = await this.clientRepository.save(client);
    return { clientId };
  }
  async findAll(): Promise<Client[]> {
    return this.clientRepository.find();
  }
  async findByDocument(document: string): Promise<Client> {
    return this.clientRepository.findOne({ where: { document } });
  }
}
