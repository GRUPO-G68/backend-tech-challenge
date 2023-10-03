const express = require('express')
var mysql     = require('mysql2')

const app = express()
const port = 3000

var connection = mysql.createConnection({
    host : 'fiap-mysql',
    user : 'root',
    password : 'segredo',
    database: 'sistema_db',
    port: 3306
})

connection.connect()

app.get('/', (req, res)=>{
    connection.query('SELECT * from produtos',function (error, result,fields) {
        if(error) throw error;
        res.send(`${result[0].name} - ${result[1].name}`)

        connection.end()
    })
})


app.listen(port, () => {
    console.log(`Exemple app Listening on port ${port}`)
})

