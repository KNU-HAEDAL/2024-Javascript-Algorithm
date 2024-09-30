const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split(" ")

let [a, b] = input

a = a.split("")
b = b.split("")

let first = 0
let second = 0

for (let i = 2; i >= 0; i--) {
  first += Number(a[i] * 10 ** i)
  second += Number(b[i] * 10 ** i)
}

if (first > second) {
  console.log(String(first))
} else {
  console.log(String(second))
}
