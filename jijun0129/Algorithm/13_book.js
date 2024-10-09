function solution(board, moves) {
  // 다음에 이동하게 될 doll을 lanes에 담아둔다.
  const lanes = [...Array(board[0].length)].map(() => []);
  for (let i = board.length - 1; i >= 0; i--) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j]) {
        lanes[j].push(board[i][j]);
      }
    }
  }

  const bucket = [];
  let answer = 0;

  for (const m of moves) {
    if (lanes[m - 1].length > 0) {
      const doll = lanes[m - 1].pop();
      if (bucket.length > 0 && bucket[bucket.length - 1] === doll) {
        bucket.pop();
        answer += 2;
      } else {
        bucket.push(doll);
      }
    }
  }
  return answer;
}
