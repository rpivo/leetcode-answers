class Solution:
  def restoreString(self, s: str, indices: List[int]) -> str:
    str = ''
    for i in range(len(indices)):
      str += s[indices.index(i)]
    return str