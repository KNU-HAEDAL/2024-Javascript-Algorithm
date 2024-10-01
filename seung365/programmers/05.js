function solution(arr1, arr2) {
  var answer = []

  //console.log(arr1,arr2)

  for (let i = 0; i < arr1.length; i++) {
    let inner_arr = []
    for (let j = 0; j < arr2[0].length; j++) {
      let num = 0
      for (let k = 0; k < arr2.length; k++) {
        num += arr1[i][k] * arr2[k][j]
      }
      inner_arr.push(num)
    }
    answer.push(inner_arr)
  }

  return answer
}
