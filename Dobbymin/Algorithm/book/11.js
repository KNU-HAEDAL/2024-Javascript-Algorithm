const s1 = 'baabaa';
const s2 = 'cdcd';

function solution(str) {
	const stack = [];

	for (let i = 0; i < str.length; i++) {
		if (stack[stack.length - 1] === str[i]) {
			stack.pop();
		} else {
			stack.push(str[i]);
		}
	}

	return stack.length === 0 ? 1 : 0;
}

console.log(solution(s1));
console.log(solution(s2));
