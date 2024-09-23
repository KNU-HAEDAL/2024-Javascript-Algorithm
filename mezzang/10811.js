// 백준 10811번 수열-바구니 뒤집기
const fs = require('fs');
const input = fs.readFileSync('10811.in').toString().split('\n');

const [N,M] = input[0].split(' ').map(Number);
let baskets = Array.from({length: N}, (_,i) => i+1); //배열을 0이 아닌 1부터 인덱싱 1부터 N가지의 배열 생성

for (let k = 1; k <= M; k++){  //M개의 명령 처리
    let [i,j] = input[k].split(' ').map(Number); //매핑

    baskets = [
        ...baskets.slice(0, i-1),
        ...baskets.slice(i-1, j).reverse(),
        ...baskets.slice(j)
    ];
}

console.log(baskets.join(' '));