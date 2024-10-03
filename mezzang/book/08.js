function solution(s) {
    const stack = [];
    for(const c of s){
        if(c === '('){
            stack.push(c);
        } else if (c === ')'){
            if (stack.length === 0){
                return false;
            }else {
                stack.pop();
            }
        }
    }
    return stack.length === 0; //boolean 값 리턴
}

console.log(solution(' (())()'));