# declare class Solution
class Solution:
  # define function countLetters, which takes in the class instance (self), and a string named s, 
  # and returns an integer
  def countLetters(self, s: str) -> int:
    # create variable total and set it to 1
    total = 1
    # create variable count and set it to 1
    count = 1
    # loop from 1 to the length of s
    for i in range(1, len(s)):
      # if the value of s at index i minus 1 strictly equals the value of s at index i
      if s[i - 1] == s[i]:
        # increment count
        count += 1
      else:
        # set count to 1
        count = 1
      # set total equal to total plus count
      total += count
    return total