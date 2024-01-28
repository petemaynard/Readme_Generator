const questions = [
   {
      message: `What is the repository's title?`,
      type: 'input',
      name: 'q1repoTitle'
   },
   {
      message: "Enter a description of the respository.",
      type: 'input',
      name: 'q2repoDesc'
   },
   {
      message: "Enter the installation instructions.",
      type: 'input',
      name: 'q3installInst'
   },
   {
      message: 'Enter usage information.',
      type: 'input',
      name: 'q4usageInfo'
   },
   {
      message: 'Contribution guidelines.',
      type: 'input',
      name: 'q5contribGuide'
   },
   {
      message: 'Enter testing instructions.',
      type: 'input',
      name: 'q6testInstruct'
   },
   {
      message: 'Which license applies?',
      type: 'list',
      choices: [
         {name: 'MIT License', value: 1},
         {name: 'Creative Commons', value: 2},
         {name: 'GNU GPL v3', value: 3}],
      name: 'q7license'
   },
   {
      message: 'What is your Github name?',
      type: 'input',
      name: 'q8github'
   },
   {
      message: 'What is your email address?',
      type: 'input',
      name: 'q9email'
   }
]

module.exports = questions;