const mysql = require('mysql2')

const pool = mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'',
        database:'todo_db'   
    }
)
module.exports=pool
// pool.connect()
