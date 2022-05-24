// const licenses = {
//   MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
//   'CC0': '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)',
//   ECLIPSE: '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
//   GNU: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
// }

const licenses = {
  MIT: {
    badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    link: '[MIT License](https://opensource.org/licenses/MIT)',
    section: ''
  },
  'CC0': {
    badge: '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)',
    link: '[Creative Commons License](http://creativecommons.org/publicdomain/zero/1.0/)',
    section: ''
  },
  ECLIPSE: {
    badge: '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
    link: '[Eclipse License](https://opensource.org/licenses/EPL-1.0)',
    section: ''
  },
  GNU: {
    badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    link: '[GNU License](https://www.gnu.org/licenses/gpl-3.0)',
    section: ''
  },
}

function renderLicenseBadge(license) {
  if (license === undefined || license === '') {
    return ''
  }
  return licenses[license].badge
}

function renderLicenseLink(license) {
  if (license === undefined || license === '') {
    return ''
  }
  return licenses[license].link
}

function renderLicenseSection(license) {
  if (license === undefined || license === '') {
    return ''
  }
  return licenses[license].section
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data =>
`${renderLicenseBadge(data.license)}
# ${data.title}
${data.description}
Deployed Site [Here](${data.deployed})

## Tech Stack
${data.tech}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution Guidelines](#contribution-guidelines)
- [Test Instructions](#test-instructions)
- [Questions](#questions)
- [License](#license)

## Installation
${data.installation}

## Usage Information
${data.usage}

## Contribution Guidelines
${data.contribution}

## Test Instructions
${data.test}`;

module.exports = generateMarkdown;
