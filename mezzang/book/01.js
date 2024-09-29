function solution(arr) {
    arr.sort((a,b) => a - b);
    return arr;
}
console.log(solution([3,-6,7,93,5,49]));