const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()

const data = JSON.parse(input)

console.log(data)

const set_sorting = (arr) => {
  const set_data = [...new Set(data)]
  return set_data.sort((a, b) => b - a)
}

console.log(set_sorting(data))
