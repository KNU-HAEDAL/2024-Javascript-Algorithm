const fs = require('fs');

const input = fs.readFileSync('10818.in').toString().trim().split('\n');

const numbers = input[1].split(' ').map(Number);

const minValue =  Math.min(...numbers);
const maxValue = Math.max(...numbers);

console.log(minValue + ' ' + maxValue);