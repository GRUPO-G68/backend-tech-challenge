import { Cliente } from "../../domain/entities/clientes";
import { IClienteRepository } from "../../applications/ports/clienteRepository";
import Database from "../../infra/database";

export class clienteInDatabaseRepository implements IClienteRepository {
  db: Database;
  constructor() {
    this.db = new Database();
  }

  async findAll(): Promise<Array<Cliente> | null> {
    return await this.db.query(`SELECT * FROM Cliente`);
  }

  async findByCpf(cpf: string): Promise<Cliente | null> {
    return await this.db.query(`SELECT * FROM Cliente WHERE cpf = ${cpf}`);
  }

  async save(cliente: Cliente): Promise<void> {
    return await this.db.query(
      `INSERT INTO Cliente ( nome, cpf, email) VALUES ('${cliente.nome}', '${cliente.cpf}', '${cliente.email}')`
    );
  }
}
