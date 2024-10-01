const arr1 = [
	[1, 4],
	[3, 2],
	[4, 1],
];

const arr2 = [
	[3, 3],
	[3, 3],
];

function solution(arr1, arr2) {
	const answer = [];
	for (let i = 0; i < arr1.length; i++) {
		const ansArr = [];
		for (let j = 0; j < arr2[0].length; j++) {
			let sum = 0;
			for (let k = 0; k < arr2.length; k++) {
				sum += arr1[i][k] * arr2[k][j];
			}
			ansArr.push(sum);
		}
		answer.push(ansArr);
	}
	return answer;
}

console.log(solution(arr1, arr2));
