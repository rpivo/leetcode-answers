import re

class Solution:
  def removeVowels(self, S: str) -> str:
    return re.sub(r'[AEIOU]', '', S, flags=re.IGNORECASE)