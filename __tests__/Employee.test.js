const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("Checking if new employee has a name, id and email.", () => {
      const employee = new Employee("Jill", 123, "jill@email.com");
      expect(employee.name).toEqual("Jill");
      expect(employee.ID).toEqual(123);
      expect(employee.email).toEqual("jill@email.com");
    });
  });

  describe("employeeMethods", () => {
    it("Find the employee name", () => {
      const newEmployee = new Employee("Ben", 124, "ben@email.com");
      expect(newEmployee.getName()).toEqual("Ben");
    });

    it("Find employee ID", () => {
      const newEmployeeID = new Employee("Sam", 125, "sam@email.com");
      expect(newEmployeeID.getID()).toEqual(125);
    });
    it("Find employee email", () => {
      const newEmployeeEmail = new Employee("Tom", 126, "tom@email.com");
      expect(newEmployeeEmail.getEmail()).toEqual("tom@email.com");
    });
    it("Find employee", () => {
      const findEmployee = new Employee("John", 127, "john@email.com");
      expect(findEmployee.getRole()).toEqual("employee");
    });
  });
});
