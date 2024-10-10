def solution(N,K): # 1부터 N , 임의의 숫자 K
  arr = []
  for i in range(N):
    arr.append(i)
  
  num = K
  while(1):
    arr.pop(num)
    num = num -1 + K
    

    if num >= len(arr):
      num = num % len(arr)
    if len(arr) == 1:
      break

  return arr[0]
