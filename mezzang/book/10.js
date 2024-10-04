function solution(s){
    const n = s.length;
    let answer = 0;

    for(let i = 0; i < s.length; i++){ // 회전수는 0번부터 (길이-1)번 까지 
        const stack = [];
        let isCorrect = true;
        for(let j = 0; j <n; j++){
            const c = s[(i + j) % n]; // 문자열을 실제로 회전시키기보다 인덱스 값을 바꾼다.i가 회전 시킨 수, c가 i번 회전시키고 첫번째로 오는 문자
            if(c ==='['|| c === '{'|| c === '('){
                stack.push(c);
            } else {
                if(stack.length === 0){
                    isCorrect = false;
                    break;
                }

                const top = stack[stack.length - 1];
                if (c === ']' && top ==='['){
                    stack.pop()
                } else if(c === '}' && top === '{'){
                    stack.pop();
                } else if(c === ')' && top === '('){
                    stack.pop();
                } else {
                    isCorrect = false;
                    break;
                }
            }
        }
            
        
        if(isCorrect && stack.length === 0){ //&&: 둘다 참이면 참 반환
            answer += 1;
        }

    }
    return answer;
}
console.log(solution('[](){}'));