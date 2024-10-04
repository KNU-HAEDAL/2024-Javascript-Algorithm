const fs = require("fs");
const inputData = fs.readFileSync("./09.in").toString().trim();
const data = parseInt(inputData);

function solution(num) {
  var stack = [];
  while (num > 0) {
    var bit = num % 2;
    num = parseInt(num / 2);
    stack.push(bit);
  }
  let ret = "";
  while (stack.length > 0) {
    ret = ret + stack.pop();
  }
  return ret;
}

console.log(solution(data));
