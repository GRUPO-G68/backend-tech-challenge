const mariadb = require('mariadb');
const migration = require('mysql-migrations');

const pool = mariadb.createPool({
        host: 'mysql-fiap', 
        user: 'fiap', 
        password: 'fiap',
        database:'fiap_db'
    });
async function startMigration (){
    const conn  = await pool.getConnection();
    migration.init(conn, __dirname + '/migrations', function() {
        console.log("finished running migrations");
      });
}

module.exports = async () => {
   await startMigration()
}