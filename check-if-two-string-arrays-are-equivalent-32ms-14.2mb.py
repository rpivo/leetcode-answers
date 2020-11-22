class Solution:
  def arrayStringsAreEqual(self, word1: List[str], word2: List[str]) -> bool:
    return str.join('', word1) == str.join('', word2)