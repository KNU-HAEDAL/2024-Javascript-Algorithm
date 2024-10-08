const prices = [1, 2, 3, 2, 3];

function solution(prices) {
	const n = prices.length;
	const answer = Array(n).fill(0);

	const stack = [0];

	for (let i = 1; i < n; i++) {
		const l = stack.length;
		while (l > 0 && prices[stack[l - 1]] > prices[i]) {
			const top = stack.pop();
			answer[top] = i - top;
		}
		stack.push(i);
	}

	while (stack.length > 0) {
		const top = stack.pop();
		answer[top] = n - 1 - top;
	}

	return answer;
}

console.log(solution(prices));
