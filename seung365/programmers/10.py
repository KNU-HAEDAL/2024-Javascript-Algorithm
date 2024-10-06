def solution(s):
    answer = 0
    s=[i for i in s]
    
    for i in range(len(s)):
        
        stack = [] 
        
        check = True
        for char in s:
            if(char == '('):
                stack.append(char)
            elif(char == ')'):
                if stack and stack[-1] == '(':
                    stack.pop()
                else:
                    check = False
                    break
            elif(char == '['):
                stack.append(char)
            elif(char == ']'):
                if stack and stack[-1] == '[':
                    stack.pop()
                else:
                    check = False
                    break
            elif(char == '{'):
                stack.append(char)
            elif(char == '}'):
                if stack and stack[-1] == '{':
                    stack.pop()
                else:
                    check = False
                    break
        
        if check and not stack:
            answer += 1
        
        s.append(s.pop(0))
        
        
        
    
    
    return answer