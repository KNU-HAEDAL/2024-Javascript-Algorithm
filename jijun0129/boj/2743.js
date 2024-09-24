const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./2743.in")
  .toString()
  .trim() // 개행준자를 제거해야 한다.
  .split();
const word = inputData[0];

console.log(word.length);
