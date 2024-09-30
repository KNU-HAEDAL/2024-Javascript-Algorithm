const fs = require('fs');
const inputData = fs.readFileSync("/dev/stdin").toString().split(" ");

const longCount = parseInt(inputData[0]) / 4;
for(var i=0; i < longCount;i++){
    process.stdout.write("long ");
}
console.log("int");