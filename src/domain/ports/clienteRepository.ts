import { Cliente } from "../entities/clientes";

export interface IClienteRepository {
  findAll(): Promise<Cliente | null>;
  findByCpf(cpf: string): Promise<Cliente | null>;
  save(cliente: Cliente): Promise<void>;
}
