def solution(n, k, cmd): #n은 처음 표의 행 개수, k는 처음 선택된 행의 위치, cmd는 명령어 배열
    
    deleted = [ ]

    up = [i - 1 for i in range(n + 2)]
    down = [i + 1 for i in range(n + 1)]

    k += 1
    
    
    for index, char in enumerate(cmd): 
        result = char.split() 

        if result[0] == 'C':
            deleted.append(k)
            up[down[k]] = up[k]
            down[up[k]] = down[k]
            k = up[k] if n < down[k] else down[k]

            
        elif result[0] == 'D':
            for _ in range(int(result[1])):
                k = down[k]
        elif result[0] == 'U':
            for _ in range(int(result[1])):
                k = up[k]
        elif char == 'Z':
            restore = deleted.pop( ) 
            down[up[restore]] = restore
            up[down[restore]] = restore
        else:
            continue
        
        
    answer = ["O"] * n
    for i in deleted:
        answer[i - 1] = "X"
    
    
    
    
    return "".join(answer) 