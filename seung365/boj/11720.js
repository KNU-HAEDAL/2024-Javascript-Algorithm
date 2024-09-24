const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")

const str = String(input[1])

let total = 0

for (let i = 0; i < input[0]; i++) {
  total += Number(str[i])
}

console.log(total)
