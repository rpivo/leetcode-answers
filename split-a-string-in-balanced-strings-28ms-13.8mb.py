class Solution:
  def balancedStringSplit(self, s: str) -> int:
    leftCount, rightCount, result = 0,0,0
    for char in s: 
      if (char == 'L'): leftCount += 1
      else: rightCount += 1
      if (leftCount == rightCount): result += 1
    return result