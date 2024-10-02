const N = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3];

function solution(N, stages) {
	const answer = [];
	const result = [];
	let total = stages.length;
	for (let i = 1; i <= N; i++) {
		const fail = stages.filter((stage) => stage === i).length;
		if (total === 0) {
			result.push({ stage: i, fail: 0 });
		} else {
			result.push({ stage: i, fail: fail / total });
		}
		total -= fail;
	}
	result.sort((a, b) => b.fail - a.fail);
	result.forEach((item) => answer.push(item.stage));
	return answer;
}

console.log(solution(N, stages));
