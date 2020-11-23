class Solution:
  def maxDepth(self, s: str) -> int:
    parentheses = ''.join(char for char in s if char in '()')
    depth = 0
    maxDepth = 0
    for char in parentheses:
      if char is '(': depth += 1
      else: depth -= 1
      if depth > maxDepth: maxDepth = depth
    return maxDepth
