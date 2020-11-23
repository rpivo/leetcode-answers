# define class Solution
class Solution:
  # define function maxDepth that takes in the class instance (self), a string called s, and 
  # returns an integer
  def maxDepth(self, s: str) -> int:
    # create a new variable called max_depth and set it equal to 0
    max_depth = 0
    # create a new variable called d and set it equal to 0
    d = 0
    # for each character c in string s
    for c in s:
      # if character c is equal to (
      if c == '(':
        # increment d by 1
        d += 1
      # else if c is equal to )
      elif c == ')':
        # decrement d by 1
        d -= 1
      # set max_depth equal to the maximum value of either d or max_depth
      max_depth = max(d, max_depth)
    return max_depth