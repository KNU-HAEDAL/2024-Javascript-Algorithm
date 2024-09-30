function solution(arr1, arr2) {
  var answer = [];
  // arr1의 열의 수만큼 반복
  for (var i = 0; i < arr1.length; i++) {
    const ansArr = [];
    // arr2의 행의 수만큼 반복
    for (var j = 0; j < arr2[0].length; j++) {
      var sum = 0;
      // arr1의 행의 수, arr2의 열의 수만큼 반복 <- 곱할 수 있다면 같아야 한다.
      for (var k = 0; k < arr2.length; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }
      ansArr.push(sum);
    }
    answer.push(ansArr);
  }
  return answer;
}
