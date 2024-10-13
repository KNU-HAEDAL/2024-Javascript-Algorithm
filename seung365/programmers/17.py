from collections import deque 

def solution(cards1, cards2, goal):
    answer = ''
    
    dq1 = deque(cards1)
    dq2 = deque(cards2)
    answer = 'Yes'
    for i in range(len(goal)):
        if dq1 and goal[i] == dq1[0]:
            dq1.popleft()
        elif dq2 and goal[i] == dq2[0]:
            dq2.popleft()
        else:
            answer = 'No'
    
    
    
    return answer