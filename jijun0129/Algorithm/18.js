function countSort(arr, k) {
  const hashtable = new Array(k + 1).fill(0);
  for (const num of arr) {
    if (num <= k) {
      // 값을 인덱스로 가지는 hashtable을 생성한다.
      hashtable[num] = 1;
    }
  }
  return hashtable;
}

function solution(arr, target) {
  const hashtable = countSort(arr, target);
  for (const num of arr) {
    const complement = target - num; // 남은 숫자가 필요한 숫자
    if (
      complement !== num &&
      complement >= 0 &&
      complement <= target &&
      hashtable[complement] === 1 // 남은 숫자가 hashtable에 존재 -> 값이 존재한다.
    ) {
      return true;
    }
  }
  return false;
}
console.log(solution([1, 2, 3, 4, 8], 6));
console.log(solution([2, 3, 5, 9], 10));
