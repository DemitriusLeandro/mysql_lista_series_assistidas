const mysql = require('mysql');

const Connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'estudo#2008',
    database: 'movies-controll'
})

module.exports = Connection;
