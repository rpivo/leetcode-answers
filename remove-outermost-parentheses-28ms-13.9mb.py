class Solution:
  # define function removeOutermostParentheses that takes in the class instance, a string called 
  # S, and returns a string
  def removeOutermostParentheses(self, S: str) -> str:
    # str() creates an empty string object
    out = str()
    # int() returns 0 when given no arguments
    ref = int()
    # for each character in S
    for i in S:
      # if i is equal to '('
      if i == '(':
        # if ref is greater than 0
        if ref > 0:
          # add char value i to out
          out += i
        # increment ref
        ref += 1
      else:
        # decrement ref
        ref -= 1
        # if ref is greater than 0
        if ref > 0:
        # add char value i to out
          out += i
    return out
    