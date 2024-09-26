const fs = require('fs')
const input = fs.readFileSync('10988.in').toString().trim();

if(input === input.split('').reverse().join('')){
    console.log(1);
} else {
    console.log(0);
}