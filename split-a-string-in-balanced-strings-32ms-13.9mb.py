class Solution:
  # define function balancedStringSplit that takes in the class instance, a string called s, and 
  # returns an integer
  def balancedStringSplit(self, s: str) -> int:
    # create variable startChar and initialize it to the first character on string s
    startChar = s[0]
    # create a variable count and initialize it to 1
    count = 1
    # create a variable ans and initialize it to 0
    ans = 0
    # loop from 1 to the length of string s minus 1
    for i in range(1, len(s) - 1):
      # if the value of string s at index i is equal to startChar
      if s[i] == startChar:
        # increment count
        count += 1
      else:
        # decrement count
        count -= 1
      # for each pass, if count is equal to 0
      if count == 0:
        # set startChar to the next character in the loop
        startChar = s[i + 1]
        # increment ans since we've achieved a balance
        ans += 1
    # return the value of ans plus 1
    return ans + 1