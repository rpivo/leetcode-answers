class Solution:
  def halvesAreAlike(self, s: str) -> bool:
    s = s.lower()
    vowels = 'aeiou'
    return len([c for c in s[0:len(s) // 2] if c in vowels]) == len([c for c in s[len(s) // 2:] if c in vowels])
