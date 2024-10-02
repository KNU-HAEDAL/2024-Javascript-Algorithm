function solution(N, stages) {
  let answer = []
  let real = []

  stages.sort((a, b) => a - b)
  let first = stages[0]
  let length = stages.length
  let total = 0
  let start = 0

  for (let i = 0; i < stages.length; i++) {
    let stage = stages[i]
    if (first == N + 1) {
      break
    }
    if (first == stage) {
      total += 1
      if (i == length - 1) {
        answer.push([stage, total / (length - start)])
      }
    } else {
      answer.push([stages[i - 1], total / (length - start)])
      first = stage
      total = 1
      start = i
      if (first == N + 1) {
        if (stages[i - 1] == N) {
          break
        } else {
          answer.push([stage - 1, 0])
        }
      }
    }
  }

  answer.sort((a, b) => {
    if (b[1] === a[1]) {
      return a[0] - b[0]
    } else {
      return b[1] - a[1]
    }
  })

  // answer 배열에서 스테이지 번호만 추출
  for (let i of answer) {
    real.push(i[0])
  }

  // 아직 추가되지 않은 스테이지 번호를 real에 추가
  for (let i = 1; i <= N; i++) {
    if (!real.includes(i)) {
      real.push(i)
    }
  }

  return real
}
