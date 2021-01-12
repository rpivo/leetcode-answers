class Solution:
  def countConsistentStrings(self, allowed: str, words: List[str]) -> int:
    result = 0
    for w in words:
      if len(list(filter(lambda c: c not in allowed, w))) == 0: result += 1
    return result
