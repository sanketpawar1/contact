const mysql = require("mysql")

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "manager",
  database: "ContactApp",
})

connection.connect()

module.exports = connection
