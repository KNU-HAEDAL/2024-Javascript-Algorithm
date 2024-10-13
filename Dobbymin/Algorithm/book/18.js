function countSort(arr, k) {
	const hashTable = new Array(k + 1).fill(0);
	for (const num of arr) {
		if (num <= k) {
			hashTable[num] = 1;
		}
	}

	return hashTable;
}

function solution(arr, target) {
	const hashTable = countSort(arr, target);
	for (const num of arr) {
		const complement = target - num;

		if (
			complement !== num &&
			complement >= 0 &&
			complement <= target &&
			hashTable[complement] === 1
		) {
			return true;
		}
	}
	return false;
}

console.log(solution([1, 2, 3, 4, 8], 6));
console.log(solution([2, 3, 5, 9], 10));
