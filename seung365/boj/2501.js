const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number)

let [a, b] = input

let total = 0

for (let i = 1; i <= a; i++) {
  if (a % i === 0) total += 1
  if (total === b) {
    console.log(i)
    break
  }
}

if (total !== b) console.log(0)
