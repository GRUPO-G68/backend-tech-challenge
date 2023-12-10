import { Client } from "../../domain/entities/client.entity";

// @todo padroinar nome de parametros e retornos
export interface IClientRepository {
  findAll(): Promise<Array<Client> | null>;
  findByCpf(cpf: string): Promise<Client | null>;
  save(client: Client): Promise<{ clientId: string }>;
}
