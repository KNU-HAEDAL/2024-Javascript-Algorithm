const fs = require("fs");
const inputData = fs.readFileSync("./08.in").toString().trim();
const data = [...inputData];

function solution(s) {
  const stack = [];
  for (const c of s) {
    if (c === "(") {
      stack.push(c);
    } else {
      if (stack.length === 0) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  return stack.length === 0;
}

console.log(solution(data));
