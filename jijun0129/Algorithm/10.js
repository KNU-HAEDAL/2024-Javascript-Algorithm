function solution(s) {
  var str = [...s];
  var answer = 0;
  for (var i = 0; i < str.length; i++) {
    if (equalCheck(str)) {
      answer += 1;
    }
    var str1 = str.slice(1);
    var str2 = str.slice(0, 1);
    str1.push(str2[0]);
    str = [...str1];
  }
  return answer;
}

function equalCheck(str) {
  var stack = [];

  for (const ch of str) {
    if (ch === "[" || ch === "{" || ch === "(") {
      stack.push(ch);
    } else if (ch === "]" || ch === "}" || ch === ")") {
      if (stack.length === 0) {
        return false;
      } else {
        const check = stack.pop();
        if (ch === "]" && (check === "{" || check === "(")) {
          return false;
        } else if (ch === "}" && (check === "[" || check === "(")) {
          return false;
        } else if (ch === ")" && (check === "[" || check === "{")) {
          return false;
        }
      }
    }
  }
  if (stack.length === 0) {
    return true;
  }
}
