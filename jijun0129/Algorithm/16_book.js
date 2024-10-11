function solution(progresses, speeds) {
  const answer = [];
  const n = progresses.length;
  // 올림을 사용해서 배포가 가능한 날짜를 계산한다.
  const daysLeft = progresses.map((progresses, index) =>
    Math.ceil((100 - progresses) / speeds[index])
  );

  let count = 0;
  let maxDay = daysLeft[0];

  for (let i = 0; i < n; i++) {
    // 배포가 가능한 날짜가 지금 완료된 작업보다 빠르면 모두 배포
    if (daysLeft[i] <= maxDay) {
      count++;
    } else {
      // 느리다면 지금까지 배포한 작업의 수는 answer에 push
      answer.push(count);
      count = 1;
      maxDay = daysLeft[i];
    }
  }
  answer.push(count);
  return answer;
}
