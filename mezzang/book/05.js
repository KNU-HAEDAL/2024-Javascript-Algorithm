// p122
function solution(arr1, arr2){

    const r1 = arr1.length; //arr1의 행의 개수
    const c1 = arr1[0].length; //arr1의 한 열의 개수

    const r2 = arr2.length; //arr2의 행의 개수
    const c2 = arr2[0].length; //arr2의 열의 개수

    const ret = [];
    for(let i = 0; i < r1; i++){
        ret.push (new Array(c2).fill(0)); // 길이가 c2인 배열 생성.결과 행렬의 크기는 r1*c2
    }

    for(let i = 0; i < r1; i++){ //arr1의 한 행에 대해
        for(let j = 0; j < c2; j++){  //arr2의 한 열에 대해
            for(let k = 0; k < c1; k++){
                ret[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }

    return ret;

}
console.log(solution([[1,2],[3,4],[5,6]], [[7,8],[9,10]]));