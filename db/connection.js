const mysql = require("mysql2");

// connect to database
const db = mysql.createConnection(
    {
      host: "localhost",
      // Your MySQL username,
      user: "root",
      // Your MySQL password
      password: "pass1234",
      database: "tracker",
    },
    console.log("Connected to the tracker database.")
  );

  module.exports = db;