function solution(prices)
{
    const n = prices.length;  //stack을 price의 인덱스로 쓴다.
    const answer = new Array(n).fill(0);

    const stack = [0];
    // 첫 번재 가격의 인덱스 0을 스택에 넣고, 두 번재 가격부터 마지막 가격까지 반복문을 돌면서 
    // 현재 가격이 스택의 마지막 가격보다 낮으면, 가격이 떨어진 것으로 간주하고 그 차이를 게산해 answer 배열에 저장한다. 
    // 반복문이 끝난 후에도 스택에 남아 있는 인덱스들은 가격에 한 번도 떨어지지 않은 경우다. 이 경우 마지막 날까지
    // 가격이 유지된 것으로 간주하고 해당 인덱스에 대해 기간을 계산해준다.

    for(let i = 1;i<n;i++){ //i는 stack에 넣는 값
        while(stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]){
            const j = stack.pop();
            answer[j] = i - j; //i는 현재 검사 중인 가격의 인덱스, j는 스택에서 꺼낸, 이전에 주식 가격이 기록된 인덱스
            // 현재 검사중인 가격의 값이 answer에 기록된다. 전이랑도 전전이랑도 비교가 된다.
        }
        stack.push(i); // 다음 주가가 더 크거나 같은 경우 push
    }
    // 반복문이 끝났음에도 스택에 남아있는 경우 
    while(stack.length >0){
        const j = stack.pop();
        answer[j] = n - 1 - j; // n-1은 마지막 인덱스, j는 스택에 남아 있던 인덱스
    }
    return answer;
}
console.log(solution([1,2,3,2,3]));