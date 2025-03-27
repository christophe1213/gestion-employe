const mysql = require('mysql2')

const pool = mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'',
        database:'gestion_employe'   
    }
)
module.exports=pool
// pool.connect()
