const s1 = '(()))()';
const s2 = '((())()';

function isEmpty(stack) {
	return stack.length === 0;
}

function solution(arr) {
	let stack = [];
	let arrNew = arr.split('');

	for (let i = 0; i < arrNew.length; i++) {
		if (arrNew[i] === '(') {
			stack.push(arrNew[i]);
		} else if (arrNew[i] === ')') {
			stack.pop();
		}
	}

	return isEmpty(stack);
}

console.log(solution(s1));
console.log(solution(s2));
