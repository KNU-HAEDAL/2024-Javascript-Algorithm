function solution(numbers) {
  var answer = [];
  // for문을 돌면서 배열에 두 수의 합 모두 push
  for (var i = 0; i < numbers.length; i++) {
    for (var j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }
  // 중복을 제거하고 오름차순 정렬하여 리턴
  return [...new Set(answer)].sort((a, b) => a - b);
}
