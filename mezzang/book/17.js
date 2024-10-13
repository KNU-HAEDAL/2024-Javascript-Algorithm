//문제 17 - 카드 뭉치
class Queue{
    items = [];
    front = 0;
    rear = 0;

    constructor(array) { //array를 매개변수로 받아 초기화를 해준다.
        this.items = array;
        this.rear = array.length;

    }

    push(item){
        this.items.push(item);
        this.rear++;
    }
    pop(){
        return this.items[this.front++];
    }

    first() {
        return this.items[this.front];
    }
    isEmpty(){
        return this.front === this.rear;
    }
}
function solution(cards1, cards2, goal){
    cards1 = new Queue(cards1);
    cards2 = new Queue(cards2);
    goal = new Queue(goal);

    while(!goal.isEmpty()){
        if(!cards1.isEmpty() && cards1.first() === goal.first()){
            cards1.pop();
            goal.pop();
        } else if(!cards2.isEmpty() && cards2.first() === goal.first()){
            cards2.pop();
            goal.pop();
        } else {
            break;
        }
    }
    return goal.isEmpty() ? "Yes":"No";
}
console.log(solution(["i","drink","water"],["want","to"],["i","want","to","drink","water"]));