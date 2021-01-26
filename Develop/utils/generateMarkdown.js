// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  } else {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`
  }
 };

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  } else {
    return '* [License](#license)'
  }
 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } else {
    return `## License
    This project is licensed under ${license}.
    `
  }
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Deployed Link
${data.link}

## Usage
${data.usage}

## Credits
${data.credits}

${renderLicenseSection(data.license)}
`;
}

// const generateMarkdown = (data) => {
//   return `
//   # ${data.title}
//   ## ${data.description}
//   ## ${data.link}
//   ## ${data.usage}
//   ## ${data.credits}
//   `;
// };



module.exports = generateMarkdown;
