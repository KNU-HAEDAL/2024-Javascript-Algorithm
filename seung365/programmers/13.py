def solution(board, moves):
    answer = 0
    stack = []
    for move in moves:
        move -= 1
        for row in board:
            if row[move] == 0:
                continue
            else:
                if stack and stack[-1] == row[move]:
                    stack.pop()
                    answer += 2
                    row[move] = 0
                    break
                stack.append(row[move])
                row[move] = 0
                break
    return answer
