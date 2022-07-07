const db = require("../db/connection");

class Role {
  async getAllRoles() {
    const sql = `SELECT * FROM role`;

    const rows = await db.query(sql) 
    return rows;
  }
}

module.exports = Role;
