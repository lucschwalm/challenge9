// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Title of project:',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter description:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter any installation instructions:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter usage information:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter guidelines for contributors:',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Enter testing instructions:',
        name: 'testing',
    },
    {
        type: 'list',
        message: 'Choose a license:',
        choices: ['GNU GPLv3', 'MIT License', 'No license'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Enter your GitHub username:',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Enter the email address you would like questions sent to:',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(fileName, generateMarkdown(data), (err) => {
        if(err) throw err;
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((value) => {
            writeToFile('README.md', value);
    });
}

// Function call to initialize app
init();
