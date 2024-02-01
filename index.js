const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./questions');

let markupA1, markupA2, markupA3, markupA4, markupA5, markupA6, markupA7, markupA8, markupA9;
let badgeURL;
let q8Github, q9Email
let finalMarkup;
const nl = "\n";
let TOC;

inquirer.prompt(questions)
   .then((answers) => {
      q1(answers.q1repoTitle);
      q2(answers.q2repoDesc);
      q3(answers.q3installInst);
      q4(answers.q4usageInfo);
      q5(answers.q5contribGuide);
      q6(answers.q6testInstruct);
      q7(answers.q7license)
      q8Github = answers.q8github;
      q9Email = answers.q9email
   })
   // Now compile all the answers into the README file
   .then(function () {
      makeReadme(q8Github, q9Email);
   });

//Project Title
function q1(answer1) {
   markupA1 = `# ${answer1}`;
}

// Project Description
function q2(answer2) {
   markupA2 = `## Description \n ${answer2}`;
}

// Installation Instructions
function q3(answer3) {
   markupA3 = `## Installation \n ${answer3}`;
}

//Usage Information
function q4(answer4) {
   markupA4 = `## Usage \n ${answer4}`;
}

// How to contribute
function q5(answer5) {
   markupA5 = `## How to Contribute \n ${answer5}`;
}


// Testing instructions
function q6(answer6) {
   markupA6 = `## Tests \n ${answer6}`;
}

// Which license
function q7(answer7) {
   if (answer7 == 1) {
      badgeURL = "![MIT Badge](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)";
      markupA7 = ("## License.  \nThis software is available under the MIT license.")
   } else if (answer7 == 2) {
      badgeURL = "![Creative Commons Badge](https://img.shields.io/badge/License-CC_BY-EF9421.svg?style=for-the-badge)"
      markupA7 = ("## License.  \nThis software is available under the Creative Commons license.")
   } else {
      badgeURL = "![GNU Badge](https://img.shields.io/badge/License-GPL_3-blue.svg?style=for-the-badge)"
      markupA7 = ("## License.  \nThis software is available under the GNU GPL v3 license.")
   }
}


function makeReadme(github, email) {
   // This is where we compile all the data into a single file.
   TOC = `## Table of Contents \n - [Description](#description) \n - [Installation](#installation) \n - [Usage](#usage) \n - [How to Contribute](#how-to-contribute) \n - [Tests](#tests) \n - [License](#license) \n - [Questions](#questions)`

   markupA8 = (`## Questions \nMy GitHub account can be found at https://github.com/${github} \n`);
   markupA9 = (`You can reach me at ${email} with any questions.`)
   let finalMarkdown = [badgeURL, markupA1, TOC, markupA2, markupA3, markupA4, markupA5, markupA6, markupA7, markupA8, markupA9]

   const pObj = finalMarkdown.join(nl);

   fs.unlink('README.md', (err) => {
      if (err) {
         console.log("Error deleting file");
      } else {
         console.log("README.md has been deleted");
         fs.writeFile('README.md', pObj, (err) =>
            err ? console.error(err) : console.log('Success!')
         );
      }
   })
}

