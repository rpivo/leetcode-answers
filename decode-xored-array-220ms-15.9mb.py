class Solution:
  def decode(self, encoded: List[int], first: int) -> List[int]:
    result = [first]
    next = first ^ 0
    for n in encoded:
      next = n ^ next
      result.append(next)
    return result
