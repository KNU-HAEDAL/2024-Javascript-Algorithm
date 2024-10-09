//문제14- 표 편집
const n = 8, k = 2;
let cmd = ["D 2","C","U 3","C","D 4","C","U 2","Z","Z","U 1","C"];
function solution(n,k,cmd){
    const deleted = []; //삭제 요소를 저장

    const up = [...new Array(n + 1)].map((_,i) => i - 1); // 위 요소의 인덱스를 저장, 인덱스에서 1을 뺀 값을 배열의 요소로 사용
    const down = [...new Array(n + 1)].map((_,i) => i + 1); //아래 행의 인덱스를 저장

    k += 1;

    for(const item of cmd){
        if(item[0] === "C"){
            deleted.push(k);
            up[down[k]] = up[k]; //현재의 아래 요소의 up이 현재의 up요소
            down[up[k]] = down[k];
            k = n < down[k] ? up[k]:down[k]; //아래 행이 있으면 down, 아니면 up

        }
        else if (item[0] === "Z"){
            const restore = deleted.pop();
            up[down[restore]] = restore;
            down[up[restore]] = restore;
        }
        else {
            const [action, num] = item.split(" ");
            if (action === "U"){
                for (let i = 0; i < num; i++){
                    k = up[k];
                }
            } else{
                for (let i = 0; i < num; i++){
                    k = down[k];
                }
            }
        }

    }
    const answer = new Array(n).fill("0");
    for(const i of deleted){
        answer[i-1] = "X";
    }
    return answer.join("");



}
console.log(solution(n,k,cmd));