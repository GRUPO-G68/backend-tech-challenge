import { Client } from "src/domain/entities/client.entity";
import { IClientRepository } from "../../application/ports/client-repository.port";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ClientRepositoryAdapter implements IClientRepository {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  async save(client: Client): Promise<{ clientId: string }> {
    const clientCreated = await this.clientRepository.save(client);
    return { clientId: clientCreated.id };
  }
  findAll(): Promise<Client[]> {
    throw new Error("Method not implemented.");
  }
  findByCpf(cpf: string): Promise<Client> {
    throw new Error("Method not implemented.");
  }
}
