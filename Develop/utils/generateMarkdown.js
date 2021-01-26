function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  } else {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`
  }
 };

function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  } else {
    return '* [License](#license)'
  }
 };

function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } else {
    return `## License
    This project is licensed under ${license}.
    `
  }
 };

// Generates markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Deployed Link
${data.link}

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

${renderLicenseSection(data.license)}

## Questions
Github username: https://github.com/${data.github}
Email: ${data.email}
`;
};



module.exports = generateMarkdown;
