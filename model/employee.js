const db = require("../db/connection");

class Employee {
  async getAllEmployees() {
    const sql = `SELECT * FROM employee`;

    const rows = await db.query(sql) 
    return rows;
  }
}

module.exports = Employee;
