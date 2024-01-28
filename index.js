const express = require('express');
const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./questions');

let markupA1, markupA2, markupA3, markupA4, markupA5, markupA6, markupA7, markupA8, markupA9;
let badgeURL;

inquirer.prompt(questions)
   .then((answers) => {
      q1(answers.q1repoTitle);
      q2(answers.q2repoDesc);
      q3(answers.q3installInst);
      q4(answers.q4usageInfo);
      q5(answers.q5contribGuide);
      q6(answers.q6testInstruct);
      q7(answers.q7license);
      q8(answers.q8github);
      q9(answers.q9email)
   })
   // Now compile all the answers into the README file
   .then(function (){
      makeReadme();
   });


   //Project Title
function q1(answer1) {
   console.log("The answer to question number 1 was: ", answer1);
   markupA1 = `# ${answer1}`;
}

// Project Description
function q2(answer2) {
   console.log("The answer to question number 2 was: ", answer2);
   markupA2 = ("## Description \n ", answer2);

}

// Installation Instructions
function q3(answer3) {
   console.log("The answer to question number 3 was: ", answer3);
   markupA3 = ("## Installation \n", answer3);
}

//Usage Information
function q4(answer4) {
   console.log("The answer to question number 4 was: ", answer4);
   markupA4 = ("## Usage \n", answer4);
}

// How to contribute
function q5(answer5) {
   console.log("The answer to question number 5 was: ", answer5);
   markupA5 = ("## How to Contribute \n", answer5);
   }


// Testing instructions
function q6(answer6) {
   console.log("The answer to question number 6 was: ", answer6);

   markupA6 = ("## Tests \n", answer6);
}

// Which license
function q7(answer7) {
   console.log("The answer to question number 7 was: ", answer7);
   if (q7license.value == 1){
      badgeURL = "https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge";
      markupA7 = ("## License.  \nThis software is available under the MIT license.")
   } else if (q7license.value == 2) {
      badgeURL = "https://img.shields.io/badge/License-CC_BY-EF9421.svg?style=for-the-badge"
      markupA7 = ("## License.  \nThis software is available under the Creative Commons license.")
   } else {
      badgeURL = "https://img.shields.io/badge/License-GPL_3-blue.svg?style=for-the-badge"
      markupA7 = ("## License.  \nThis software is available under the GNU GPL v3 license.")
   }
}

// Github name
function q8(answer8) {
   console.log("The answer to question number 8 was: ", answer8);
}

// Email address
function q9(answer9) {
   console.log("The answer to question number 9 was: ", answer9);
}


function makeReadme() {
// This is where we compile all the data into a single file.
// Or we have a single function called 'append' to append each answer to the outfile
console.log("Where I join the data together.")

}