def solution(s):
    answer = -1
    s_list = []
    index = 0
    s_list.append(s[0])
    for char in s[1:]:
        if s_list and s_list[-1] == char:
            s_list.pop()
            continue
        else:
            s_list.append(char)
            
    if s_list:
        answer = 0
    else:
        answer = 1

    return answer