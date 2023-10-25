import { Cliente } from "../domain/entities/clientes";

export interface IClienteRepository {
  findByCpf(cpf: string): Promise<Cliente | null>;
  save(cliente: Cliente): Promise<void>;
}
