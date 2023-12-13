import { Client, IClient } from '../../domain/entities/client.entity';

export interface IClientRepository {
  findAll(): Promise<IClient[]>;
  findByDocument(document: string): Promise<IClient>;
  save(client: Client): Promise<{ clientId: string }>;
}
