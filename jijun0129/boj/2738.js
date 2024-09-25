const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./2738.in")
  .toString()
  .split("\n");
const [N, M] = inputData[0].split(" ").map(Number);

// 행렬 A와 B를 inputData에서 분리
const A = [];
for (var i = 1; i <= N; i++) {
  const matrixLine = inputData[i].split(" ").map(Number);
  A.push(matrixLine);
}
const B = [];
for (var i = N + 1; i <= 2 * N; i++) {
  const matrixLine = inputData[i].split(" ").map(Number);
  B.push(matrixLine);
}

// 행렬 더해서 출력
for (var i = 0; i < N; i++) {
  for (var j = 0; j < M; j++) {
    process.stdout.write(`${A[i][j] + B[i][j]} `);
  }
  console.log();
}
