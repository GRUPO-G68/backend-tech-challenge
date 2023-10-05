require('dotenv').config()
const express = require('express')
const mariadb = require('mariadb');

const app = express()
const port = process.env.PORT

const pool = mariadb.createPool({
        host: process.env.MYSQL_HOST, 
        user: process.env.MYSQL_USER, 
        password: process.env.MYSQL_PASSWORD,
        database:process.env.MYSQL_DB_NAME
    });


app.get('/', async (req, res)=>{
    let conn;

    try {
        conn = await pool.getConnection();
        const rows = await conn.query('SELECT * from produtos');
        res.send(rows)

    }catch(e){
        console.log(e)
    } finally {
    if (conn) conn.release(); //release to pool
    }
})


app.listen(port, () => {
    console.log(`Exemple app Listening on port ${port}`)
})

