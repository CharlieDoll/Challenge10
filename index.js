const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
let teamArray = [];

// inquirer - ask q's
//

// jared - Manager ID1 jared@fakemail.com
// alec - engineer ID 2 alec@fakemail.com
// Grace - engineer ID 3 grace@fakemail.com
// Tammer - Engineer ID4 tammer@fakemail.com
// John - - Intern ID5 john@fakemail.com

// name/ position/ ID no./ email/
