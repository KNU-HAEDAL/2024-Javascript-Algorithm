def solution(prices):
    answer = [0] * len(prices)
    stack = []
    stack.append((prices[0],0))
    for index, price in enumerate(prices[1:-1]):
        while stack and stack[-1][0] > price:
            temp=stack.pop()
            answer[temp[1]] = (index+1) - temp[1]

        stack.append((price,index+1))

    for i in stack:
        answer[i[1]] = len(prices) - i[1] -1
    
    return answer