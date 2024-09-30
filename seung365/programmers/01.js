const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()

const data = JSON.parse(input)

console.log(data)

const sorting = (arr) => {
  arr.sort((a, b) => a - b)
  return arr
}

console.log(sorting(data))
