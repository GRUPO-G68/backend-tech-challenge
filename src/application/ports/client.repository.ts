import { Client } from "../../domain/entities/client.entity";

export interface IClientRepository {
  findAll(): Promise<Array<Client> | null>;
  findByCpf(cpf: string): Promise<Client | null>;
  save(client: Client): Promise<{ clientId: string }>;
}
