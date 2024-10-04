const decimal1 = 10;
const decimal2 = 27;
const decimal3 = 12345;

function solution(number) {
	let answer = '';
	let stack = [];

	while (number > 0) {
		if (number % 2 === 0) {
			stack.push(0);
			number = number / 2;
		} else {
			stack.push(1);
			number = (number - 1) / 2;
		}
	}

	answer = stack.reverse().join('');
	return answer;
}

console.log(solution(decimal1));
console.log(solution(decimal2));
console.log(solution(decimal3));
