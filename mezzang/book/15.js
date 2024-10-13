//문제15 - 요세푸스 문제
class Queue{ //선형 큐 구현
    items = [];
    front = 0;
    rear = 0;

    push(item){
        this.items.push(item);
        this.rear++;

    }
    size(){
        return this.rear - this.front; //사이즈 반환
    }
    pop(){
        return this.items[this.front++]; //큐의 앞부분 항목을 제거하고 반환
    }

}
function solution(N,K){
    const queue = new Queue(); //객체 생성
    for( let i = 1; i<= N; i++){
        queue.push(i);
    }
    while(queue.size()>1){
        for(let i = 0; i< K - 1; i++){
            queue.push(queue.pop());
        }
        queue.pop(); //k번째 pop
    }
    return queue.pop();
}
console.log(solution(5,2));