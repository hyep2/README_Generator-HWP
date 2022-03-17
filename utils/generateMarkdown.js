// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderBadge(data.license)}


## Description

${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

To install necessary dependencies, run the following commands: 

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

${renderLicenseInfo(data.license)}

## Contributing

${data.contributing}

## Tests

To run tests, run the following command:

\`\`\`
${data.test}
\`\`\`

## Questions

If you have any questions about the repo, contact me directly at ${data.email}.
You can find more of my other projects at [${data.github}]. (https://github.com/${data.github}/).
`;
}

//render badge
function renderBadge(license) {
  if(license==='None') {
    return '';
  }
  //if user selects license, will display badge
  else {
    return `![Github License](https://img.shields.io/badge/license-${license}-green.svg)`
  }
}

//render license information if user selects a license
function renderLicenseInfo(license) {
  if(license==='None') {
    return;
  }
  else {
    return `## License

This project is licensed under the terms of the ${license}.`
  }
}
module.exports = generateMarkdown;
