const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./10807.in")
  .toString()
  .split("\n");
const c = parseInt(inputData[0]);
const numList = inputData[1].split(" ").map(Number);
const v = parseInt(inputData[2]);

var count = 0;
for (var i = 0; i < c; i++) {
  if (numList[i] === v) {
    count++;
  }
}
console.log(count);
