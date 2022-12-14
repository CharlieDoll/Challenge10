const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, ID, email, school) {
    super(name, ID, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "intern";
  }
}

module.exports = Intern;
