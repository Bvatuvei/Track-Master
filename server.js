const db = require("./db/connection");
const inquirer = require("inquirer");
const Employee = require("./model/employee");
const Role = require("./model/role");
const Department = require('./model/department');
const { addEmployee } = require("./model/employee");
require("console.table");

db.connect((err) => {
  if (err) throw err;
  console.log("Database connected.");
});
init();

function init() {
  inquirer
    .prompt([
      {
        message: "What would you like to do?",
        name: "inputChoice",
        type: "list",
        choices: [
          "View Employees",
          "View Roles",
          "View Departments",
          "Add Employee",
          "Add Role",
          "Add Department",
          "Done",
        ],
      },
    ])
    .then((answer) => {
      switch (answer.inputChoice) {
        case "View Employees":
          viewEmployees();
          break;
        case "View Roles":
          viewRoles();
          break;
          case "View Departments":
            viewDepartments();
            break;
        case "Role":
          addRole();
          break;
        case "Add Employee":
          addEmployee();
          break;
        default:
          done();
      }
    });
}

function viewEmployees() {
  Employee.getAllEmployees().then((data) => console.table(data[0]));
}

function viewRoles() {
  Role.getAllRoles().then((data) => console.table(data[0]));
}

function viewDepartments() {
  Department.getAllDepartments().then((data) => console.table(data[0]));
}

function addEmployee() {
  inquirer
  .prompt
}