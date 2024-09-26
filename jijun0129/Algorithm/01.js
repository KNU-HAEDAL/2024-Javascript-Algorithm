const fs = require("fs");
// 01.in에서 데이터 읽어온다.
const inputData = fs.readFileSync("./01.in").toString().trim();
// 입력의 [, ] 제거
const data = inputData.substring(1, inputData.length - 1);
// data를 숫자 배열로 만든다.
const arr = data.split(", ").map(Number);

// arr 배열을 오름차순으로 정렬
function solution(arr) {
  arr.sort((a, b) => a - b);
  return arr;
}

ans = solution(arr);

// 배열 모양으로 출력하기
process.stdout.write("[");
for (var i = 0; i < ans.length - 1; i++) {
  process.stdout.write(ans[i] + ", ");
}
console.log(ans[ans.length - 1] + "]");
