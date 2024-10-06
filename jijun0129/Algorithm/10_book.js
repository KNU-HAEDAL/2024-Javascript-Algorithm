function solution(s) {
  const n = s.length;
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    const stack = [];
    let isCorrect = true;
    for (let j = 0; j < n; j++) {
      // i + j만큼 뒤의 문자열부터 시작해서 앞부분 문자열까지 본다.
      const c = s[(i + j) % n];

      if (c === "[" || c === "(" || c === "{") {
        stack.push(c);
      } else {
        if (stack.length === 0) {
          isCorrect = false;
          break;
        }
        const top = stack[stack.length - 1];
        if (c === "]" && top === "[") {
          stack.pop();
        } else if (c === "}" && top === "{") {
          stack.pop();
        } else if (c === ")" && top === "(") {
          stack.pop();
        } else {
          isCorrect = false;
          break;
        }
      }
    }
    if (isCorrect && stack.length === 0) {
      answer += 1;
    }
  }
  return answer;
}
