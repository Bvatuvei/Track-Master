const db = require("../db/connection");

class Employee {
  constructor(db) {
    this.db = db;
  }
  // async getAllEmployees() {
  //   const sql = `SELECT * FROM employee`;

  //   const rows = await db.query(sql) 
  //   return rows;
  // }
  getAllEmployees() {
    return this.db.promise().query(`SELECT * FROM employee`)
  }
  addEmployee(employee) {
    return this.db.promise().query(`INSERT INTO employee SET ?`, employee)
  }
  updateOldEmployee(employee, newValues) {
    return this.db.promise().query(`UPDATE employee SET ? WHERE employee.id = ?`, [newValues, employee])
  }
}

module.exports = new Employee(db);
