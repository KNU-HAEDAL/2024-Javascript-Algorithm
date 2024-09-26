const fs = require("fs");
const inputData = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./19532.in")
  .toString();
const [a, b, c, d, e, f] = inputData.split(" ").map(Number);

for (var i = -999; i <= 999; i++) {
  for (var j = -999; j <= 999; j++) {
    var checkABC = checkNum(a, b, c, i, j);
    var checkDEF = checkNum(d, e, f, i, j);
    if (checkABC === true && checkDEF === true) {
      console.log(i, j);
      break;
    }
  }
}

function checkNum(a, b, c, x, y) {
  ans = a * x + b * y;
  if (ans === c) {
    return true;
  } else {
    return false;
  }
}
