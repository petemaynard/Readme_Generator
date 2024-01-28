// const express = require('express');
const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./questions');

let markupA1, markupA2, markupA3, markupA4, markupA5, markupA6, markupA7, markupA8, markupA9;
let badgeURL;
var q8Github, q9Email
var finalMarkup;

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
   .then(function (){
      makeReadme(q8Github, q9Email);
   });


   //Project Title
function q1(answer1) {

   markupA1 = `# ${answer1}`;
     console.log("markup1 is: ", markupA1); 
}

// Project Description
function q2(answer2) {
   markupA2 = "## Description \n ", answer2;
   console.log("markup2 is: ", markupA2); 
}

// Installation Instructions
function q3(answer3) {
   markupA3 = "## Installation \n", answer3;
   console.log("markup3 is: ", markupA3); 
}

//Usage Information
function q4(answer4) {
   markupA4 = "## Usage \n", answer4;
      console.log("markupA4 is: ", markupA4);
}

// How to contribute
function q5(answer5) {
   markupA5 = "## How to Contribute \n", answer5;
   console.log("markupA5 is: ", markupA5);
   }


// Testing instructions
function q6(answer6) {
   markupA6 = "## Tests \n", answer6;
   console.log("markupA6 is: ", markupA6);
}

// Which license
function q7(answer7) {
   console.log("The answer to question number 7 was: ", answer7);
   if (answer7 == 1){
      badgeURL = "https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge";
      markupA7 = ("## License.  \nThis software is available under the MIT license.")
   } else if (answer7 == 2) {
      badgeURL = "https://img.shields.io/badge/License-CC_BY-EF9421.svg?style=for-the-badge"
      markupA7 = ("## License.  \nThis software is available under the Creative Commons license.")
   } else {
      badgeURL = "https://img.shields.io/badge/License-GPL_3-blue.svg?style=for-the-badge"
      markupA7 = ("## License.  \nThis software is available under the GNU GPL v3 license.")
   }
   console.log("markupA7 is: ", markupA7);
}


function makeReadme(github, email) {
// This is where we compile all the data into a single file.
// Or we have a single function called 'append' to append each answer to the outfile
console.log("Where I join the data together.")

markupA8 =(`## Questions \nMy GitHub accout can be found at https://github.com/${github}`);
markupA9 =(`## You can reach me at ${email}`)
finalMarkup=[markupA1, markupA2, markupA3, markupA4, markupA5, markupA6, markupA7, markupA8, markupA9]
console.log("The final markup is this:" + finalMarkup);

finalMarkup="";
for (var i = 0; i < finalMarkup.length; i++){
// Do something here   

   }
}