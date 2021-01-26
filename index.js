// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'desription',
            message: 'Please provide a description of the project. How, what, and why. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                  return true;
                } else {
                  console.log('You need to enter a project description!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'link',
            message: 'If your application is deployed please provide the link!'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions and examples for use. Add screenshots as neccessary.'
        },
        {
            type: 'input',
            name: 'credits',
            message: 'If there are collaborators provide their github account.'
        },
        {
            type: 'input',
            name: 'license',
            message: 'Add your license.'
        }
    ])
    .then(answers => {
        console.log(answers);
    })
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

questions();
