let board = [
    [0,0,0,0,0],
    [0,0,1,0,3],
    [0,2,5,0,1],
    [4,2,4,4,2],
    [3,5,1,3,1]
];
let moves = [1,5,3,5,1,2,1,4];

function solution(board, moves){
    const stack = [...Array(board[0].length)].map(()=>[]);
    
    for(let i = board.length - 1; i >= 0; i--){
        for(j = 0; j < board[0].length; j++){
            if(board[i][j]){
                stack[j].push(board[i][j]);
            }
        }
    }
    const basket = [];
    let answer = 0;

    for(m of moves){
        if(stack[m-1].length > 0){
            const doll = stack[m-1].pop();

            if(basket.length>0 && basket[basket.length - 1] == doll){
                basket.pop();
                answer += 2;

            } else{
            basket.push(doll);
            }
        }
    }

    return answer;

}
console.log(solution(board, moves));