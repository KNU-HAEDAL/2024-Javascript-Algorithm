const n = 5;
const k = 2;

function solution(n, k) {
  index = 0;
  count = 0;
  queue = [];
  for (var i = 1; i <= n; i++) {
    queue.push(i);
  }
  //count는 삭제한 갯수 == n-1개면 종료하고 n번째 숫자 출력
  while (count < n - 1) {
    for (let i = 0; i < k - 1; i++) {
      queue.push(queue[index++]);
    }
    count++;
    index++;
  }
  return queue[index++];
}

console.log(solution(n, k));
