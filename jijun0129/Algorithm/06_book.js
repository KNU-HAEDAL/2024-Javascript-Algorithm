function solution(N, stages) {
  const challenger = new Array(N + 2).fill(0);
  for (const stage of stages) {
    challenger[stage] += 1;
  }
  const fails = {};
  // total을 구하고 빼면서 player의 수를 구한다.
  let total = stages.length;

  for (let i = 1; i <= N; i++) {
    if (challenger[i] === 0) {
      fails[i] = 0;
      continue;
    }
    fails[i] = challenger[i] / total;
    total -= challenger[i];
  }
  // 객체를 키와 값을 쌍으로 묶어서 배열로 만들어준다. (Object.entries() 메서드)
  // stage는 오름차순으로 이미 정렬되어 있다.
  const result = Object.entries(fails).sort((a, b) => b[1] - a[1]);

  // 배열의 키 값만 숫자로 만들어 반환한다.
  return result.map((v) => Number(v[0]));
}
