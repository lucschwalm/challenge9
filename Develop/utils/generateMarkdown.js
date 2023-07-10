// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'GNU GPLv3'){
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if(license === 'MIT License') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'GNU GPLv3'){
    return 'https://www.gnu.org/licenses/gpl-3.0';
  } else if(license === 'MIT License') {
    return 'https://opensource.org/licenses/MIT';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license != 'No license'){
    return `${license} ${renderLicenseLink(license)}`
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## Contribution
${data.contribution}
## Tests
${data.testing}
## License
${renderLicenseSection(data.license)}
## Questions
GitHub: ${data.username}
https://github.com/${data.username}
Please direct questions to: ${data.email}
`;
}

module.exports = generateMarkdown;
