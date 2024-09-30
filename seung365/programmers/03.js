const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()

const data = JSON.parse(input)

//console.log(data)

const arr = new Set()

for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data.length; j++) {
    if (i === j) {
    } else {
      arr.add(data[i] + data[j])
    }
  }
}

console.log([...arr].sort((a, b) => a - b))
