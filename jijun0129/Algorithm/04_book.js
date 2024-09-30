// 책의 내용
function solution(answers) {
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  const scores = [0, 0, 0];

  // 배열의 entries() 메서드는 배열 내 데이터를 인덱스와 값으로 묶어서 순회할 수 있는 Iterator 객체를 반환한다.
  // of 연산자를 사용해 Iterator 객체를 순회하며 데이터를 읽는다.
  for (const [i, answer] of answers.entries()) {
    for (const [j, pattern] of patterns.entries()) {
      if (answer === pattern[i % pattern.length]) {
        scores[j] += 1;
      }
    }
  }
  const maxScore = Math.max(...scores);

  const highestScores = [];
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === maxScore) {
      highestScores.push(i + 1);
    }
  }
  return highestScores;
}
