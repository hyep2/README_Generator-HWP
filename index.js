//importing node packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
const path = require('path');

// array of questions for user
const questions = [ 
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  { 
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your github username?'
  },
  {
    type: 'input',
    name: 'description',
    message: "Write a short description of your project (ie. project's function, motivation for project, what problems does it solve)?",
  },
  {
    type: 'input',
    name: 'technologies',
    message: 'What languages and libraries did you use?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions for your project?',
    default: 'npm i',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What are the usage instructions for your project?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What is the license for your project?',
    choices: ['MIT', 'APACH_2.0', 'GPL_3.0', 'BSD_3', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What are the contributing guidelines for your project?',
  },
  {
    type: 'input',
    name: 'test',
    message: 'What command should be run to run tests?',
    default: 'npm run test',
  },
  {
    type: 'input',
    name: 'image',
    message: 'What is the link to the image/picture of your project?',
    default: 'pic.png'
  },
];


// function to initialize program
function init() {
  inquirer.prompt(questions)
  .then(responses => {
    //the path.join will place the readme file in the current directory and name it accordingly
    fs.writeFileSync( path.join(process.cwd(), 'README.md'), generateMarkdown({...responses}), err=>console.log(err))
  })
  .catch(err=>console.log(err))
}

// function call to initialize program
init();
