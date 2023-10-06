require('dotenv').config();
const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB_NAME
});

async function getConnection() {
    let db;
    try {
        db = await pool.getConnection();
        console.log('Connected to MariaDB!');
        return db;
    } catch (error) {
        console.error('Error connecting to MariaDB:', error);
        throw error;
    }
}

// Adicione a função query para executar consultas diretamente
async function query(sql, params) {
    const conn = await getConnection();
    try {
        return await conn.query(sql, params);
    } finally {
        if (conn) conn.release();
    }
}

module.exports = {
    getConnection,
    query  // Exporte a função query
};