const Intern = require("../lib/Intern");
//  name, id, email, school

describe("Intern", () => {
  describe("Initialization", () => {
    it("Checking if new employee has a name, id, email and school.", () => {
      const intern = new Intern("Jill", 123, "jill@email.com", "High School");
      expect(intern.name).toEqual("Jill");
      expect(intern.ID).toEqual(123);
      expect(intern.email).toEqual("jill@email.com");
      expect(intern.school).toEqual("High School");
    });
  });

  describe("internMethods", () => {
    it("Find the Intern name", () => {
      const newIntern = new Intern("Ben", 124, "ben@email.com", "High School");
      expect(newIntern.getName()).toEqual("Ben");
    });

    it("Find Intern ID", () => {
      const newInternID = new Intern(
        "Sam",
        125,
        "sam@email.com",
        "High School"
      );
      expect(newInternID.getID()).toEqual(125);
    });
    it("Find Intern email", () => {
      const newInternEmail = new Intern(
        "Tom",
        126,
        "tom@email.com",
        "High School"
      );
      expect(newInternEmail.getEmail()).toEqual("tom@email.com");
    });
    it("Find Intern School", () => {
      const internSchool = new Intern(
        "Sally",
        128,
        "sally@email.com",
        "High School"
      );
      expect(internSchool.getSchool()).toEqual("High School");
    });
    it("Find Intern", () => {
      const findIntern = new Intern(
        "John",
        127,
        "john@email.com",
        "High School"
      );
      expect(findIntern.getRole()).toEqual("intern");
    });
  });
});
