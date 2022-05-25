const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

const questions = [
    {
        type: 'input',
        name: 'file',
        message: 'What will the file name be?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What it the title for this project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description for this project?'
    },
    {
        type: 'input',
        name: 'preview',
        message: 'What is the image file path for the application preview? Ex. ./deployed.png'
    },
    {
        type: 'input',
        name: 'tech',
        message: 'What technologies are used for this project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for this project?'
    },
    {
        type: 'input',
        name: 'deployed',
        message: 'What is the deployed link?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How about usage information?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license is the project under?',
        choices: [
            {name: 'MIT', value: 'MIT'},
            {name: 'CC0', value: 'CC0'},
            {name: 'ECLIPSE', value: 'ECLIPSE'},
            {name: 'GNU', value: 'GNU'},
            {name: 'None', value: ''}
        ]
    },
    {
        type: 'input',
        name: 'license_information',
        message: 'What is the year and name of the license? Ex. 2022 Tony Andrew Vallescas'
    }
]

const promptUser = () => inquirer.prompt(questions);

function init() {
    promptUser()
        .then((answers) => {
            const fileName = `${answers.file.toLowerCase().split(' ').join('')}.md`
            return fs.writeFileSync(fileName, generateMarkdown(answers))
        })
        .then(() => console.log('Successfully written to file.'))
        .catch((err) => console.error(err))
};

init();