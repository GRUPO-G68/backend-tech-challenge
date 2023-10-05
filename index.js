require('dotenv').config()
const express = require('express')
const mariadb = require('mariadb');

const app = express()
const port = process.env.PORT

const pool = mariadb.createPool({
        host: 'mysql-fiap', 
        user: 'fiap', 
        password: 'fiap',
        database:'fiap_db'
    });


app.get('/', async (req, res)=>{
    console.log('oi')
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

