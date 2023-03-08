const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
let teamArray = [];

function managerQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the Managers Name?",
      },
      {
        type: "input",
        name: "employeeID",
        message: "What is the employee's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is their email address?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is their office number?",
      },
    ])
    .then((answers) => {
      //   console.log(answers);
      const newManager = new Manager(
        answers.managerName,
        answers.employeeID,
        answers.email,
        answers.officeNumber
      );
      teamArray.push(newManager);
      console.log(teamArray);
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

managerQuestions();
// inquirer - ask q's
//

// jared - Manager ID1 jared@fakemail.com
// alec - engineer ID 2 alec@fakemail.com
// Grace - engineer ID 3 grace@fakemail.com
// Tammer - Engineer ID4 tammer@fakemail.com
// John - - Intern ID5 john@fakemail.com

// name/ position/ ID no./ email/
