class Solution:
  def maximum69Number (self, num: int) -> int:
    hasSwitchedNumber = False
    result = []
    for char in str(num):
      if not hasSwitchedNumber and char is '6':
        result.append('9')
        hasSwitchedNumber = True
      else: result.append(char)
    return int(''.join(result))