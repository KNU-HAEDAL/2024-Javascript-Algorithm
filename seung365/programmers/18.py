def hash (arr, target):
  
  dic = {}

  for i in arr:
    if i > target:
      dic[i] = 0
    else:
      dic[i] = 1

  for key in dic:
    if key in dic:
      if not target-key == key:
        if target-key in dic:
          print(True)
          return

  print(False)

hash([1,2,3,4,8], 6)
hash([2,3,5,9], 10)
