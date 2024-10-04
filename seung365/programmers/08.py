
def check(exam):
  stack = []

  for char in exam:
    if char == '(':
      stack.append(char)
    else:
      if stack[-1] == '(':
        stack.pop()
      else:
        return False
  
  if len(stack) > 0:
    return False
  else:
    return True  

print(check('(())()'))
print(check('((())())'))
print(check('((())()'))

