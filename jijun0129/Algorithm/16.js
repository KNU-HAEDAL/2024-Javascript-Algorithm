function solution(progresses, speeds) {
  var answer = [];
  var check = 0;
  while (check < progresses.length) {
    for (var i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }
    var count = 0;
    while (progresses[check] >= 100) {
      count += 1;
      check += 1;
    }
    if (count !== 0) {
      answer.push(count);
    }
  }
  return answer;
}
