// 문제 18 - 두 개의 수로 특정 값 만들기
const arr = [1,2,3];
const target = 6;

function countSort(arr, k){
    const hashtable = new Array(k+1).fill(0); //값을 인덱스로 매핑하기 위함
    for(const num of arr){
        if(num <= k){
            hashtable[num] = 1; // 현재 원소의 값을 인덱스로 해 해당 인덱스의 해시 테이블 값을 1로 설정
        }
    }
    return hashtable;
}

function solution(arr, target){
    const hashtable = countSort(arr, target);
    for(const num of arr){
        const complement = target - num;
        if(complement >= 0 && complement !== num && hashtable[complement] ===1){ //0이상이고 중복선택 안되고 해시테이블에 값이 있으면
            return true;
        }
    }
    return false;
}
console.log(solution(arr, target));