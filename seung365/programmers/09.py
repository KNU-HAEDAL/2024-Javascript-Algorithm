def solution(number):
  arr = []
  while(number >=1):
    check = number%2
    number = number//2
    if check == 0:
      arr.append(0)
    else:
      arr.append(1)
  binary = ''
  for i in range(len(arr)):
    binary += str(arr.pop())

  return binary

print(solution(10))
print(solution(27))
print(solution(12345))

