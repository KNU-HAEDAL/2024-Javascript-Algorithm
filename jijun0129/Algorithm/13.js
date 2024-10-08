function solution(board, moves) {
  var answer = 0;
  var stack = [];
  for (const move of moves) {
    for (var i = 0; i < board.length; i++) {
      // move - 1 열의 값을 내려가면서 0이 아닌 첫번째 수를 찾는다.
      if (board[i][move - 1] !== 0) {
        console.log(board[i][move - 1]);
        if (
          stack.length > 0 &&
          stack[stack.length - 1] === board[i][move - 1]
        ) {
          stack.pop();
          answer += 1;
        } else {
          stack.push(board[i][move - 1]);
        }
        board[i][move - 1] = 0;
        break;
      }
    }
  }
  return answer * 2;
}
