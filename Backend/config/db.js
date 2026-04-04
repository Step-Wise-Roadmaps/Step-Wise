const mysql = require('mysql2');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'iconic_Neftalem',
    database: 'stepWise_rodmaps'
});

db.connect((err) => {
    if(err) throw err
    return console.log("MySQL Connected...")
})

module.exports = db;