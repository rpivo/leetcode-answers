class Solution:
  # define removeVowels(), which takes in class instance and string S, and returns a string
  def removeVowels(self, S: str) -> str:
    # create ans, which is a list
    # for single item c in string S, return c if c is not in the string 'aeiou'
    ans = [c for c in S if c not in 'aeiou']
    # return ans by joining all items with separator ''
    return ''.join(ans)