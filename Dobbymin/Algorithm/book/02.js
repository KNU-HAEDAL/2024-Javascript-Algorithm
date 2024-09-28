const arr1 = [4, 2, 2, 1, 3, 4];
const arr2 = [2, 1, 1, 3, 2, 5, 4];

function solution(arr) {
	/**
	 * Set은 집합을 만드는 객체로 중복을 허용하지 않는다.
	 * Set 객체를 이용하여 중복을 제거한 배열을 만들고
	 * sort() 메소드를 이용하여 내림차순으로 정렬한다.
	 * arr.sort() -> 오름차순 정렬
	 * arr.sort((a, b) => b - a) -> 내림차순 정렬
	 */
	const uniqueArr = [...new Set(arr)];
	uniqueArr.sort((a, b) => b - a);
	return uniqueArr;
}

console.log(solution(arr1));
console.log(solution(arr2));
