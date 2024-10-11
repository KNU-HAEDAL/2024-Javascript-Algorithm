from collections import deque

def solution(progresses, speeds):
    dq = deque(progresses)  # progresses 리스트를 바로 deque로 변환
    sd = deque(speeds)      # speeds 리스트를 deque로 변환
    answer = []
    while(1):
        total = 0
        for index in range(len(dq)):
            dq[index] += sd[index]
        
        while dq and dq[0] >= 100:  # dq의 첫 번째 요소가 100 이상이면 완료된 작업
            dq.popleft() # 완료된 작업 출력
            sd.popleft()  # 해당 작업의 speed도 제거
            total += 1
        if total:
            answer.append(total)
        
        if not dq:
            break
            
    
    
    
    return answer