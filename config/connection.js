const mysql = require('mysql')

let connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'myoldsixtyeight',
    database: 'burgers_db'
});

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection.connect(function (err) {
        if (err) {
            console.error('Error connecting to database')
        }
        console.log('Connected as ID ' + connection.threadId)
    });

}



module.exports = connection;