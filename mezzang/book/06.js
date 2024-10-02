function solution(N, stages){
    const challenger = new Array(N + 2).fill(0);
    // 각 스테이지를 인덱스로 사용하기 위함. N번째 스테이지를 클리어한 사용자는 N+1위치에 저장된다. (0위치는 사용되지 않음)
    // 이 배열은 각 스테이지에 도전 중인 플레이어의 수를 기록하는 배열
    for (const stage of stages){
        challenger[stage] += 1;  // 각 플레이어가 도달한 stage에 대해 challenger[stage]의 값을 1씩 증가시킨다.
        // 예를들어, 플레이어가 stage3에 있으면 challenger[3]의 값이 1 증가합니다.
        // challenger 배열의 인덱스에 도전자의 수가 저장된다. 여기서 인덱스는 스테이지 단계를 말한다.
    }

    const fails = {};
    let  total = stages.length; //total은 총 사용자 수

    for (let i = 1; i <= N; i++){
        if(challenger[i] === 0){ // 도전한 사람이 없는 경우 실패율은 0, challenger[N + 1]은 실패율 0
            fails[i] = 0;
            continue;
        }

        fails[i] = challenger[i] / total;
        // 키는 i, 값은 challenger[i]/total 이며 이 값들이 쌍을 이뤄 fails 객체 변수에 저장된다고 보면 된다. total의 값은 현재 스테이지에 도달한 사용자 값.

        total -= challenger[i];
        // N번째 스테이지에 도달한 사용자의 수를 구하려면 N-1번째 스테이지에 있는 사용자의 수를 빼면 된다.
        // 1부터 N까지 각각 구한다.

    }

    const result = Object.entries(fails).sort((a,b) => b[1] - a[1]);
    // Obeject.entries 메서드 사용 ( 배열을 이용하여 키와 값을 묶어줌. 0번째 인덱스가 키 1번째 인덱스가 값)
    //  sort 함수를 통해 값을 내림차순 정렬
    return result.map((v) => Number(v[0]));
    // 스테이지 번호만 반환하기 위해 map을 이용하여 스테이지 번호만 추출한다. 키는 문자열이기 때문에 Number을 통해 숫자로 변환한다. 
    // v는 result배열의 각 요소를 나타낸다. v[0]은 v가 배열일 대 첫 번째요소, 즉 v는 2차원 배열(또는 키,값 쌍)의 형태일 가능성이 있다.
    // 여기서는 키-값 쌍의 키 값을 반환한다.
}
console.log(solution(5,[2,1,2,6,2,4,3,3]));