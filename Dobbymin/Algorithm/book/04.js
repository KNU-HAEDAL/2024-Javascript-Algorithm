const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 3, 2, 4, 2];

function solution(answers) {
	const score = [0, 0, 0];
	const student1 = [1, 2, 3, 4, 5];
	const student2 = [2, 1, 2, 3, 2, 4, 2, 5];
	const student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

	for (let i = 0; i < answers.length; i++) {
		if (answers[i] === student1[i % student1.length]) {
			score[0]++;
		}
		if (answers[i] === student2[i % student2.length]) {
			score[1]++;
		}
		if (answers[i] === student3[i % student3.length]) {
			score[2]++;
		}
	}

	const max = Math.max(...score);
	const result = [];
	for (let i = 0; i < score.length; i++) {
		if (score[i] === max) {
			result.push(i + 1);
		}
	}
	return result;
}

const object1 = {
	a: 'somestring',
	b: 42,
};

for (const [key, value] of arr.entries()) {
	console.log(`${key}: ${value}`);
}

console.log(solution(arr1));
console.log(solution(arr2));
