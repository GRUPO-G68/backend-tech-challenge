import { Cliente } from "../../domain/entities/clientes";
import { IClienteRepository } from "../../application/ports/clienteRepository";
import Database from "../../infrastructure/database";

export class clienteInDatabaseRepository implements IClienteRepository {
  db: Database;
  constructor() {
    this.db = new Database();
  }

  async findAll(): Promise<Array<Cliente> | null> {
    return await this.db.query(`SELECT * FROM Cliente`);
  }

  async findByCpf(cpf: string): Promise<Cliente | null> {
    const results = await this.db.query(
      `SELECT * FROM Cliente WHERE cpf = ${cpf}`,
    );
    if (results && results.length > 0) {
      const clienteData = results[0];
      const cliente: Cliente = {
        id: clienteData.id,
        nome: clienteData.nome,
        cpf: clienteData.cpf,
        email: clienteData.email,
      };
      return cliente;
    } else {
      return null;
    }
  }

  async save(cliente: Cliente): Promise<void> {
    return await this.db.query(
      `INSERT INTO Cliente ( nome, cpf, email) VALUES ('${cliente.nome}', '${cliente.cpf}', '${cliente.email}')`,
    );
  }
}
