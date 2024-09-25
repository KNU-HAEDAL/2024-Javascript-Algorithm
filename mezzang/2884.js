const fs = require('fs')
const input = fs.readFileSync('2884.in').toString().split(' ').map(Number);

let H = input[0];
let M = input[1];

M -= 45;

if (M < 0) {
    M += 60;
    H -= 1;
}

if(H <0 ) {
    H = 23;
}

console.log(H, M);

