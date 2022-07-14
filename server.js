// const db = require("./db/connection");
const inquirer = require("inquirer");
const Employee = require("./model/employee");
const Role = require("./model/role");
const Department = require("./model/department");
const employee = require("./model/employee");
const role = require("./model/role");
// const { updateEmployee } = require("./model/employee");
require("console.table");

// db.connect((err) => {
//   if (err) throw err;
//   console.log("Database connected.");
// });
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
          "Update Employee",
          "Update Role",
          "Update Department",
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
        case "Add Role":
          addRole();
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "Add Department":
          addDepartment();
          break;
        case "Update Employee":
          updateEmployee();
          break;
        case "Update Role":
          updateRole();
          break;
        case "Update Department":
          updateDepartment();
          break;
        default:
          done();
      }
    });
}

function viewEmployees() {
  Employee.getAllEmployees().then((data) => console.table(data[0]));
  init();
}

function viewRoles() {
  Role.getAllRoles().then((data) => console.table(data[0]));
  init();
}

function viewDepartments() {
  Department.getAllDepartments().then((data) => console.table(data[0]));
  init();
}

function addEmployee() {
  inquirer
    .prompt([
      {
        message: "What is your employees first name?",
        name: "firstName",
        type: "input",
      },
      {
        message: "What is your employees last name?",
        name: "lastName",
        type: "input",
      },
      {
        message:
          "If your employee has a manager id enter it, otherwise leave blank",
        name: "managerId",
        type: "input",
      },
    ])
    .then((answer) => {
      console.log(answer);
      const newEmployee = {
        first_name: answer.firstName,
        last_name: answer.lastName,
        manager_id: answer.managerId,
      };
      return Employee.addEmployee(newEmployee);
    })
    .then((employee) => {
      console.log(employee);
      init();
    });
}

function addRole() {
  inquirer
    .prompt([
      {
        message: "What is the title of your role?",
        name: "roleTitle",
        type: "input",
      },
      {
        message: "What is the salary of the position?",
        name: "salary",
        type: "input",
      },
      {
        message: "What is the id of the department associated with the role?",
        name: "departmentId",
        type: "input",
      },
    ])
    .then((answer) => {
      console.log(answer);
      const newRole = {
        title: answer.roleTitle,
        salary: answer.salary,
        department_id: answer.departmentId,
      };
      return Role.addRole(newRole);
    })
    .then((role) => {
      console.log(role);
      init();
    });
}

function addDepartment() {
  inquirer
    .prompt([
      {
        message: "What is the name of your department?",
        name: "departmentName",
        type: "input",
      },
    ])
    .then((answer) => {
      console.log(answer);
      const newDepartment = {
        name: answer.departmentName,
      };
      return Department.addDepartment(newDepartment);
    })
    .then((department) => {
      console.log(department);
      init();
    });
}

function updateEmployee() {
  // Employee.updateEmployee(3, { first_name: "Whats up" });
  inquirer
  .prompt([
    {
      message: "What is the id of the employee you want to update?",
      name: "employeeId",
      type: "input",
    },
    {
      message: "What is the new first name you would like to assign?",
      name: "firstName",
      type: "input",
    },
    {
      message: "What is the new last name you would like to assign?",
      name: "lastName",
      type: "input",
    },
    {
      message:
        "What is the new manager id you would like to assign?",
      name: "managerId",
      type: "input",
    },
  ])
  .then((answer) => {
    console.log(answer);
    const newEmployee = {
      first_name: answer.firstName,
      last_name: answer.lastName,
      manager_id: answer.managerId,
    };
    const employeeId = {
      id: answer.employeeId
    }
    return Employee.updateOldEmployee(employeeId, newEmployee);
  })
  .then((employee) => {
    console.log(employee);
    init();
  });
}

function updateRole() {
  // Employee.updateEmployee(3, { first_name: "Whats up" });
  inquirer
  .prompt([
    {
      message: "What is the ID of the Role you want to update?",
      name: "roleId",
      type: "input",
    },
    {
      message: "What is the new title of your role?",
      name: "roleTitle",
      type: "input",
    },
    {
      message: "What is the new salary of the position?",
      name: "salary",
      type: "input",
    },
    {
      message: "What is the new id of the department associated with the role?",
      name: "departmentId",
      type: "input",
    },
  ])
  .then((answer) => {
    console.log(answer);
    const newRole = {
      title: answer.roleTitle,
      salary: answer.salary,
      department_id: answer.departmentId,
    };
    const roleId = {
      id: answer.roleId
    };
    return Role.updateOldRole(roleId, newRole);
  })
  .then((role) => {
    console.log(role);
    init();
  });
}

function updateDepartment() {
  // Employee.updateEmployee(3, { first_name: "Whats up" });
  inquirer
  .prompt([
    {
      message: "What is the ID of the department you would like to update?",
      name: "departmentId",
      type: "input",
    },
    {
      message: "What is the new name of your department?",
      name: "departmentName",
      type: "input",
    },
  ])
  .then((answer) => {
    console.log(answer);
    const newDepartment = {
      name: answer.departmentName,
    };
    const departmentId = {
      id: answer.departmentId
    }
    return Department.updateOldDepartment(departmentId, newDepartment);
  })
  .then((department) => {
    console.log(department);
    init();
  });
}
