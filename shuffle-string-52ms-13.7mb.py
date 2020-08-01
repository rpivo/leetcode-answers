class Solution:
  # define function restorString, that takes in the class instance, a string called s, and
  # a list of integers called indices, and returns a string
  def restoreString(self, s: str, indices: List[int]) -> str:
    # creates a List containing a number of 0s equal to the length of string s
    a = ['0'] * len(s)
    # create loop that iterates for each letter in string s
    for i in range(len(s)):
      # set list a at index indices[i] equal to string s at index i
      a[indices[i]] = s[i]
    # join all chars in list a and return it
    return ''.join(a)