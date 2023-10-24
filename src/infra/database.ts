import dotenv from "dotenv";
import mariadb, { Pool, PoolConnection } from "mariadb";

dotenv.config();

class Database {
  private pool: Pool;

  constructor() {
    this.pool = mariadb.createPool({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DB_NAME,
    });
  }

  public async getConnection(): Promise<PoolConnection> {
    let db;
    try {
      db = await this.pool.getConnection();
      return db;
    } catch (error) {
      console.error("Error connecting to MariaDB:", error);
      throw error;
    }
  }

  public async query(sql: string, params: any): Promise<any> {
    const conn = await this.getConnection();
    try {
      return await conn.query(sql, params);
    } finally {
      if (conn) conn.release();
    }
  }
}

export default Database;
