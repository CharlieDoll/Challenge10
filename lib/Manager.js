const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, ID, email, office) {
    super(name, ID, email);
    this.office = office;
  }

  getOffice() {
    return this.office;
  }

  getRole() {
    return "manager";
  }
}

module.exports = Manager;
