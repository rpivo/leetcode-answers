class Solution:
  def interpret(self, command: str) -> str:
    result = ''
    for i, s in enumerate(command):
      if s is 'G':
        result += s
      elif s is '(':
        if command[i + 1] is ')':
          result += 'o'
        elif command[i + 1] is 'a':
          result += 'al'
      else:
        continue
        
    return result
