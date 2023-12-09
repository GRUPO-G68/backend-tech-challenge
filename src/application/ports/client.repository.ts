import { Client } from "../../domain/entities/cliente.entity";

export interface IClientRepository {
  findAll(): Promise<Array<Client> | null>;
  findByCpf(cpf: string): Promise<Client | null>;
  save(client: Client): Promise<{ clientId: string }>;
}
