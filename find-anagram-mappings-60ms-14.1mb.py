class Solution:
  def anagramMappings(self, A: List[int], B: List[int]) -> List[int]:
    return [B.index(A[i]) for i in range(0, len(A))]