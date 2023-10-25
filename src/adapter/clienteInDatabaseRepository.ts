import { Cliente } from "../domain/entities/clientes";
import { IClienteRepository } from "./clienteRepository";
import Database from "../infra/database";

export class clienteInDatabaseRepository implements IClienteRepository {
  async findAll(): Promise<Cliente | null> {
    const db = new Database();
    return await db.query(`SELECT * FROM Cliente`, []);
  }

  async findByCpf(cpf: string): Promise<Cliente | null> {
    const db = new Database();
    return await db.query(`SELECT * FROM Cliente WHERE cpf = ${cpf}`, []);
  }

  async save(): Promise<void> {}
}
