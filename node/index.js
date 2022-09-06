const express = require('express')
const app = express()
const port = 3001
const config = {
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values ('werinton')`
connection.query(sql)
connection.end()

app.get('/', (req, res) => {
    res.send('<h1>Full Cycle </h1>')
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})