function solution(answers) {
  let return_arr = []

  const first = [1, 2, 3, 4, 5]
  const second = [2, 1, 2, 3, 2, 4, 2, 5]
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

  let first_corr = 0
  let secon_corr = 0
  let third_corr = 0

  for (let i = 0; i < answers.length; i++) {
    if (first[i % first.length] === answers[i]) first_corr++
    if (second[i % second.length] === answers[i]) secon_corr++
    if (third[i % third.length] === answers[i]) third_corr++
  }
  const max_val = Math.max(first_corr, secon_corr, third_corr)

  if (max_val === first_corr) return_arr.push(1)
  if (max_val === secon_corr) return_arr.push(2)
  if (max_val === third_corr) return_arr.push(3)

  return return_arr
}
