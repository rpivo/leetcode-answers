class Solution:
  def flipAndInvertImage(self, A: List[List[int]]) -> List[List[int]]:
    return [[int(not bool(n)) for n in r[::-1]] for r in A]
