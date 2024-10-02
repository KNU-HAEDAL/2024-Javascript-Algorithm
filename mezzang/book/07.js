//좌표 평면을 벗어나는지 체크하는 함수 (불린 값을 반환한다.)
function isValidMove(nx, ny){
    return nx >= -5 && nx <= 5 &&ny >=-5 &&ny <=5;
}

// 명령어에 따라 좌표를 업데이트
function updateLocation(x, y, dir){
    switch(dir){
        case 'U':
            return[x, y+1];
        case 'D':
            return[x, y-1];
        case 'R':
            return[x+1,y];
        case 'L':
            return[x-1,y];
    }
}

function solution(dirs){
    let x = 0;
    let y = 0;

    // visited 는 경로 계산을 위해. 중복을 피하기 위해 Set으로 설정
    const visited = new Set();
    for (const dir of dirs){ // 입력 받은 명령어를 순회
        const [nx, ny] = updateLocation(x, y, dir); // 배열 구조 분해 할당- 배열의 값을 개별 변수에게 쉽게 할당하는 구문
        // 이 방식은 배열에서 각 값을 순서대로 변수에 할당하는 데 사용한다. 
        // updateLocation 이 newx와 newy를 반환하면 각각 nx와 ny에 할당한다.

        if(!isValidMove(nx,ny)){
            continue;
        }

        visited.add(`${x}${y}${nx}${ny}`); // visited는 Set, 템플릿리터럴!
        visited.add(`${nx}${ny}${x}${y}`);

        [x,y] = [nx,ny]; // 좌표를 이동하였으니 업데이트!
    }

    return visited.size / 2; //두가지의 경로가 반복되어 저장되었으니 2로 나눠줘야 한다.
}
console.log(solution('ULURRDLLU'));