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
}

module.exports = new Department(db);
