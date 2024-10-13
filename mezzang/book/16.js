// 문제 16 - 기능 개발
const progresses = [93, 30, 55];
const speeds = [1,30,5];
function solution(progresses, speeds){
    const queue = [];
    const daysLeft = progresses.map((progress, index) => Math.ceil((100-progress)/speeds[index])); //map함수: 배열의 각 요소와 인덱스를 매개변수로 전달
    const n = progresses.length;
    let count = 0;
    let maxDay = daysLeft[0];

    for(let i = 0; i < n; i++){
        if(daysLeft[i] <= maxDay){
            count++;
        } else {
        queue.push(count);
        count = 1; //현재 인덱스
        maxDay = daysLeft[i];
        }
    }
    queue.push(count);
    return queue;
}
console.log(solution(progresses, speeds));