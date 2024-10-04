function solution(decimal){
    const stack = [];

    while (decimal > 0){
        const remainder = decimal % 2;
        stack.push(remainder);
        decimal = Math.floor(decimal / 2); // 소수점 이하 버리기
    }

    let binary = "";
    while (stack.length > 0){
        binary += stack.pop();
    }

    return binary;
}
console.log(solution(8));