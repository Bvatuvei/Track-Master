const db = require("../db/connection");

class Department {
  async getAllDepartments() {
    const sql = `SELECT * FROM department`;

    const rows = await db.query(sql) 
    return rows;
  }
}

module.exports = Department;
