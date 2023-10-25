import { Cliente } from "../../domain/entities/clientes";

export interface IClienteRepository {
  findAll(): Promise<Array<Cliente> | null>;
  findByCpf(cpf: string): Promise<Cliente | null>;
  save(cliente: Cliente): Promise<void>;
}
