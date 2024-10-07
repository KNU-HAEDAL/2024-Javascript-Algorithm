function solution(prices) {
  // stack에 index를 저장한다.
  var answer = new Array(prices.length).fill(0);
  var stack = [0];
  for (var i = 1; i < prices.length; i++) {
    //stack에 index가 저장되어 있으므로 prices를 index로 비교한다.
    while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
      // j 이후로 값이 떨어졌으므로 기간을 계산
      const j = stack.pop();
      answer[j] = i - j;
    }
    stack.push(i);
  }
  while (stack.length > 0) {
    const j = stack.pop();
    answer[j] = prices.length - 1 - j;
  }
  return answer;
}
