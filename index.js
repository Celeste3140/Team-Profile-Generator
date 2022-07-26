const Manager = require('./lib/manager.class');
const Engineer = require('./lib/engineer.class');
const Intern = require('./lib/intern.class');

const fs = require('fs');
const inquirer = require('inquirer');

const webPage = require('./src/webPage');

const employees = [];

function MemberQs() {
    inquirer.prompt({
        message: "Team member's name?",
        name: "name"
    },
    {
       type: 'list',
       message: "Team member's role?",
       name: 'role',
       choices: [
        'Engineer',
        'Intern',
        'Manager'
       ],
    },
    {
        message: "Enter team member's id.",
        name: 'id'
    },
    {
        message: "Team member's Github?",
        name: 'Github'
    },
    {
        message: "Team member's email?",
        name: 'email'
    },
    {
        type: 'list',
        message: "Add more team members?",
        choices: [
            'yes',
            'no'
        ],
        name: 'addMembers'
    })
}

const createPage = data => {
    fs.writeFile('./dist/index.html', data)
    console.log('Team profile has beem create!')
}