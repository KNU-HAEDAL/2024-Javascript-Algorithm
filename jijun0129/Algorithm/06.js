function solution(N, stages) {
  var answer = [];
  // 참가자가 있는 스테이지
  var challenge = new Array(N + 1).fill(0);
  // 스테이지와 실패율을 객체로 가지는 배열
  var failArray = [];

  for (let i = 0; i < stages.length; i++) {
    challenge[stages[i] - 1] += 1;
  }
  // 뒤의 스테이지에 있는 플레이어라면 앞의 스테이지는 지나갔음을 이용
  // 끝에서부터 player를 더해가면 스테이지를 도달한 플레이어 수를 알 수 있다.
  let player = 0;
  for (let i = challenge.length - 1; i >= 0; i--) {
    let fail = 0;
    player += challenge[i];
    if (player !== 0) {
      fail = challenge[i] / player;
    }
    // 클리어 한 경우를 제외해야한다.
    if (i != challenge.length - 1) {
      failArray.push({ index: i, fail: fail });
    }
  }
  // 실패율을 기준으로 내림차순 정렬하고 같다면 stage를 기준으로 오름차순 정렬
  failArray.sort((a, b) => b.fail - a.fail || a.index - b.index);
  for (let i = 0; i < failArray.length; i++) {
    answer.push(failArray[i].index + 1);
  }
  return answer;
}
