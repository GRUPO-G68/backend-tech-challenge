import dotenv from "dotenv";
import mariadb, { Pool, PoolConnection } from "mariadb";

dotenv.config();

class Database {
  private pool: Pool;

  constructor() {
    this.pool = mariadb.createPool({
      // host: "localhost:3306",
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

  public async query(sql: string): Promise<any> {
    const conn = await this.getConnection();
    try {
      return await conn.query(sql);
    } finally {
      if (conn) conn.release();
    }
  }
}

export default Database;
