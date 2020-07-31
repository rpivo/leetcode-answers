class Solution:
  def numJewelsInStones(self, J: str, S: str) -> int:
    c = 0
    d = {}
    for i in S:
      d[i] = d.get(i, 0) + 1
    for i in J:
      if i in d:
        c += d[i]
    return c