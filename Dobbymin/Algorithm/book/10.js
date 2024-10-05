const s1 = '[](){}';
const s2 = '}]()[{';
const s3 = '[)(]';
const s4 = '}}}';

function solution(arr) {
	const x = arr.length;
	let answer = 0;

	for (let i = 0; i < x; i++) {
		const stack = [];
		let isCorrect = true;

		for (let j = 0; j < x; j++) {
			const c = arr[(i + j) % x];

			if (c === '(' || c === '[' || c === '{') {
				stack.push(c);
			} else {
				if (stack.length === 0) {
					isCorrect = false;
					break;
				}

				const top = stack[stack.length - 1];
				if (c === ')' && top === '(') {
					stack.pop();
				} else if (c === ']' && top === '[') {
					stack.pop();
				} else if (c === '}' && top === '{') {
					stack.pop();
				} else {
					isCorrect = false;
					break;
				}
			}
		}

		if (isCorrect && stack.length === 0) {
			answer += 1;
		}
	}

	return answer;
}

console.log(solution(s1));
console.log(solution(s2));
console.log(solution(s3));
console.log(solution(s4));
