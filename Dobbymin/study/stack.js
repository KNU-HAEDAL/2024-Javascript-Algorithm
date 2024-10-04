const stack = [];

const maxSize = 10;

function isFull(stack) {
	return stack.length === maxSize;
}

function isEmpty(stack) {
	return stack.length === 0;
}

function push(stack, item) {
	if (isFull(stack)) {
		console.log('가득핑!');
	} else {
		stack.push(item);
		console.log('추가핑!');
	}
}

function pop(stack) {
	if (isEmpty(stack)) {
		console.log('비어핑!');
		return null;
	} else {
		return stack.pop();
	}
}
