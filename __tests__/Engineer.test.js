const Engineer = require("../lib/Engineer");
// const engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("Checking if new engineer has a name, id, email, Github", () => {
      const engineer = new Engineer(
        "Jill",
        123,
        "jill@email.com",
        "Github.com/jill"
      );
      expect(engineer.name).toEqual("Jill");
      expect(engineer.ID).toEqual(123);
      expect(engineer.email).toEqual("jill@email.com");
      expect(engineer.github).toEqual("Github.com/jill");
    });
  });

  describe("engineerMethods", () => {
    it("Find the employee name", () => {
      const newEngineer = new Engineer("Ben", 124, "ben@email.com");
      expect(newEngineer.getName()).toEqual("Ben");
    });

    it("Find engineer ID", () => {
      const newEngineerID = new Engineer("Sam", 125, "sam@email.com");
      expect(newEngineerID.getID()).toEqual(125);
    });
    it("Find engineer email", () => {
      const newEngineerEmail = new Engineer("Tom", 126, "tom@email.com");
      expect(newEngineerEmail.getEmail()).toEqual("tom@email.com");
    });
    it("Find engineer GitHub", () => {
      const findGithub = new Engineer(
        "John",
        127,
        "john@email.com",
        "github.com/john"
      );
      expect(findGithub.getGithub()).toEqual("github.com/john");
    });
  });
});
