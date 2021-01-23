class Solution:
  def countLetters(self, S: str) -> int:
    return reduce(
      lambda x, y: x + (y * (y + 1)) // 2,
      [len(x) for x in [list(g) for k, g in groupby(S)]],
      0,
    )
