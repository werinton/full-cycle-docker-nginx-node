const express = require('express')
const app = express()
const port = 3000
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
    let body = '<p><h1>Full Cycle Rocks!</h1></p>'
    body += '<p>- Lista de nomes cadastrada no banco de dados.</p>'


    let con = mysql.createConnection(config)
    con.query("SELECT * FROM people", function (err, result, fields) {
        if (err) throw err;
        console.log(result);

        Object.keys(result).forEach(function(key) {
            var row = result[key];
            body += row.name + '</br>'
            console.log(row.name)
          });
        res.send(body);

    });
    con.end()
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})