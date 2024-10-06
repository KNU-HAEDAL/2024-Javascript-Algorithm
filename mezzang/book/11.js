function solution(s)
{
    const stack = [];
    for (const c of s){
        let top = stack[stack.length - 1];
        if(top === c){
            stack.pop();
        }else {
            stack.push(c);
        }
    }
    return stack.length === 0? 1 : 0 ;
}
console.log(solution('baabaa'));
console.log(solution('cdcd'));