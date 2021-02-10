const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
// const Intern
const Manager = require("./lib/Manager")
const fs = require("fs")
const inquirer = require("inquirer")
const path = require("path")
// const { create } = require("domain")
// add const w/ output path to dist (path.join(outputdirectory, 'team.html'))
// add const render requires src template.js
// create function for each team member w/ inq prompt inside function, will have to use fs - ref template as output directory
// const team member array - empty - we will push into this 

// big function here - will hold it all, function init(create)

function init() {
    function createManager() {
        inquirer.prompt([
            {
                type: "input",
                name: "officeNumber",
                message: "What is number, manager?"
        
            }
        ]).then(responses => {
            const manager = new Manager(responses.managerName, responses.officeNumber) // do for each question asked
            teamMemberArray.push(manager) 
        })
    }

    //write file function inside of main function, write filesync and path
  createManager()
}

init()