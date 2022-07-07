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
}

module.exports = new Role(db);
