function solution(dirs) {
  dirArr = [...dirs];
  var answer = 0;
  // 경로를 중복하지 않고 저장할 Set 생성
  var roadSet = new Set();
  var y = 0;
  var x = 0;
  // String으로 변환해서 경로를 관리
  for (let i = 0; i < dirArr.length; i++) {
    if (dirArr[i] === "U" && y < 5) {
      roadSet.add(String(y) + String(x) + String(y + 1) + String(x));
      y += 1;
    } else if (dirArr[i] === "D" && y > -5) {
      // 아래로 가는 경우는 -1의 위치에서 올라온다고 생각해도 무방하다.
      roadSet.add(String(y - 1) + String(x) + String(y) + String(x));
      y -= 1;
    } else if (dirArr[i] === "R" && x < 5) {
      roadSet.add(String(y) + String(x) + String(y) + String(x + 1));
      x += 1;
    } else if (dirArr[i] === "L" && x > -5) {
      // 좌로 가는 경우도 동일하게 -1의 위치에서 오른쪽으로 간다고 생각해도 무방하다.
      roadSet.add(String(y) + String(x - 1) + String(y) + String(x));
      x -= 1;
    }
  }
  answer = roadSet.size;
  return answer;
}
