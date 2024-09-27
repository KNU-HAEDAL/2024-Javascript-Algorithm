const fs = require("fs");
const inputData = fs.readFileSync("./02.in").toString().trim();
const data = inputData
  .substring(1, inputData.length - 1)
  .split(", ")
  .map(Number);

// data 배열을 set을 사용하여 중복을 제거하고 내림차순 정렬
function solution(data) {
  const ansData = [...new Set(data)];
  ansData.sort((a, b) => b - a);
  return ansData;
}

console.log(solution(data));
