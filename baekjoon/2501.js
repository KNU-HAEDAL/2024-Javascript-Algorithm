const fs = require('fs');
const input = fs.readFileSync('2501.in').toString().trim().split(' ');

const N = parseInt(input[0],10);
const K = parseInt(input[1], 10);

let divisor = [];
for(let i = 1; i<= N; i++){
    if(N%i == 0){
        divisor.push(i);
    }
}
if (divisor.length >= K){
    console.log(divisor[K - 1]);
}else{
    console.log(0);
}
