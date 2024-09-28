const numbers1 = [2, 1, 3, 4, 1];
const numbers2 = [5, 0, 2, 7];

function solution(numbers) {
	const answer = [];
	for (let i = 0; i < numbers.length; i++) {
		for (let j = i + 1; j < numbers.length; j++) {
			answer.push(numbers[i] + numbers[j]);
		}
	}
	return [...new Set(answer)].sort((a, b) => a - b);
}

console.log(solution(numbers1));
console.log(solution(numbers2));
