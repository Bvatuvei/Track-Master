const db = require("../db/connection");

class Role {
  constructor(db) {
    this.db = db
  }
  // async getAllRoles() {
  //   const sql = `SELECT * FROM role`;

  //   const rows = await db.query(sql) 
  //   return rows;
  // }
  getAllRoles() {
    return this.db.promise().query(`SELECT * FROM role`);
  }
  addRole(role) {
    return this.db.promise().query(`INSERT INTO role SET ?`, role)
  }
  updateOldRole(role, newValues) {
    return this.db.promise().query(`UPDATE role SET ? WHERE role.id = ?`, [newValues, role])
  }
}

module.exports = new Role(db);
