// on console: npm i readline-sync

const readline = require('readline-sync');
let name = readline.question("Enter name: ");
console.log(`Hi ${name}`);