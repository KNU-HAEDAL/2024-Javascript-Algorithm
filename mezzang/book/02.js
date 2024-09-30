// p.112
function solution(arr){
    const uniqueArr = [...new Set(arr)];
    uniqueArr.sort((a,b) => b - a);
    return uniqueArr;
}
console.log(solution([23,-6,4,4,7,78,-5]));