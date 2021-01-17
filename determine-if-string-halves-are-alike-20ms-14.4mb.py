# declare class Solution
class Solution:
  # define function halvesAreAlike, which takes in the class instance (self), a string called s, 
  # and returns a boolean
  def halvesAreAlike(self, s: str) -> bool:
    # create an integer called l and set it to 0, create an integer called r and set it equal to 
    # the length of s minus 1
    l, r = 0, len(s) - 1
    # create an integer called count and set it to 0
    count = 0
    # create a set of unique values called vowels, containing each vowel, both uppercase and 
    # lowercase
    vowels = set(['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'])
    # while l is less than r
    while l < r:
      # if the value of string s at index l is in the vowels set
      if s[l] in vowels:
        # increment count
        count += 1
      # if the value of string s at index r is in the vowels set
      if s[r] in vowels:
        # decrement count
        count -= 1
      # increment l
      l += 1
      # decrement r
      r -= 1
    # return a boolean based on whether or not count is equal to 0
    return count == 0

