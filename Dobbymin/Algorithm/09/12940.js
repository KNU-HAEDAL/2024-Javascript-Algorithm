function solution(n, m) {
	return (answer = [gcd(n, m), lcm(n, m)]);
}

function gcd(a, b) {
	if (b === 0) {
		return a;
	}
	return gcd(b, a % b);
}

function lcm(a, b) {
	return (a * b) / gcd(a, b);
}
