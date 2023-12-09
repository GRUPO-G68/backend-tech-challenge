import { Client } from "src/domain/entities/cliente.entity";
import { IClientRepository } from "../../application/ports/client.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ClientRepositoryAdapter implements IClientRepository {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  async save(client: Client): Promise<void> {
    await this.clientRepository.save(client);
  }
  findAll(): Promise<Client[]> {
    throw new Error("Method not implemented.");
  }
  findByCpf(cpf: string): Promise<Client> {
    throw new Error("Method not implemented.");
  }
}
