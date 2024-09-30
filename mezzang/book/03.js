function solution(numbers){
    const ret = [];
    for (let i = 0; i < numbers.length; i++){
        for(let j = 0; j < i; j++){
            ret.push(numbers[i] + numbers[j]);
        }
    }
    return([...new Set(ret)].sort((a,b) => a-b));
}
console.log(solution([3,0,9]));