const db = require("../db/connection");

class Department {
  constructor(db) {
    this.db = db
  }
  // async getAllDepartments() {
  //   // const sql = `SELECT * FROM department`;

  //   // const rows = await db.query(sql) 
  //   // return rows;
  // }
  getAllDepartments() {
    return this.db.promise().query(`SELECT * FROM department`);
  }
  addDepartment(department) {
    return this.db.promise().query(`INSERT INTO department SET ?`, department)
  }
  updateOldDepartment(department, newValues) {
    return this.db.promise().query(`UPDATE department SET ? WHERE department.id = ?`, [newValues, department])
  }
}

module.exports = new Department(db);
