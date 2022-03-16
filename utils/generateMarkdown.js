// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
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

##License


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

module.exports = generateMarkdown;
