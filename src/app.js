require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT
const dbConnect = require('./config/dbConnect.js');

app.get('/', async (req, res)=>{
    let conn;

    try {
        const rows = await dbConnect.query('SELECT * from clientes');
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

