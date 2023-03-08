const Manager = require("../lib/Manager");
const manager = require("../lib/Manager");

// name, ID, email, office
describe("Manager", () => {
  describe("Initialization", () => {
    it("Checking if new manager has a name, id, email and office.", () => {
      const manager = new Manager("Jill", 123, "jill@email.com", 1);
      expect(manager.name).toEqual("Jill");
      expect(manager.ID).toEqual(123);
      expect(manager.email).toEqual("jill@email.com");
      expect(manager.office).toEqual(1);
    });
  });

  describe("managerMethods", () => {
    it("Find the manager name", () => {
      const newManager = new Manager("Ben", 124, "ben@email.com", 1);
      expect(newManager.getName()).toEqual("Ben");
    });

    it("Find employee ID", () => {
      const newManagerID = new Manager("Sam", 125, "sam@email.com", 1);
      expect(newManagerID.getID()).toEqual(125);
    });
    it("Find manager email", () => {
      const newManagerEmail = new Manager("Tom", 126, "tom@email.com", 1);
      expect(newManagerEmail.getEmail()).toEqual("tom@email.com");
    });
    it("Find manager office", () => {
      const managerOffice = new Manager("Bill", 189, "bill@email.com", 3);
      expect(managerOffice.getOffice()).toEqual(3);
    });
    it("Find manager", () => {
      const findManager = new Manager("John", 127, "john@email.com", 1);
      expect(findManager.getRole()).toEqual("manager");
    });
  });
});
