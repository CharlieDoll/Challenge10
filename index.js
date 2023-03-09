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
      mainMenu();
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

function mainMenu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "options",
        message: "Would you like to add another team member?",
        choices: ["Engineer", "Intern", "Finish Building Your Team"],
      },
    ])
    .then((answers) => {
      if (answers.options === "Engineer") {
        console.log("if Engineer chosen");
        createEngineer();
      }
      if (answers.options === "Intern") {
        console.log("If Intern chosen");
        createIntern();
      }
      if (answers.options === "Finish Building Your Team") {
        console.log("Finish Building Team");
      }
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });

  function createEngineer() {
    // name, ID, email, Github username
    // ask qs about engineer - use manager ex.
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is the Engineer's Name?",
        },
        {
          type: "input",
          name: "engineerID",
          message: "What is the engineer's ID?",
        },
        {
          type: "input",
          name: "email",
          message: "What is their email address?",
        },
        {
          type: "input",
          name: "githubName",
          message: "What is their Github username?",
        },
      ])

      .then((answers) => {
        //   console.log(answers);
        const newEngineer = new Engineer(
          answers.engineerName,
          answers.engineerID,
          answers.email,
          answers.githubName
        );
        teamArray.push(newEngineer);
        console.log(teamArray);
        mainMenu();
      })
      .catch((error) => {
        if (error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
        } else {
          // Something else went wrong
        }
      });
  }

  function createIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is the Intern's Name?",
        },
        {
          type: "input",
          name: "internID",
          message: "What is the intern's ID?",
        },
        {
          type: "input",
          name: "email",
          message: "What is their email address?",
        },
        {
          type: "input",
          name: "ointernSchool",
          message: "Which school did they attend?",
        },
      ])
      .then((answers) => {
        //   console.log(answers);
        const newIntern = new Intern(
          answers.internName,
          answers.internID,
          answers.email,
          answers.internSchool
        );
        teamArray.push(newIntern);
        console.log(teamArray);
        mainMenu();
      })
      .catch((error) => {
        if (error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
        } else {
          // Something else went wrong
        }
      });
  }
  htmlPrint = () => {
    fs.writeFile("./public/index.html", htmlContent, (err) =>
      err ? console.error(err) : console.log("Employee information saved!")
    );
  };
}
