class Solution:
  # define function truncateSentence, which takes in the class instance (self),
  # string s, and integer k, and returns a string
  def truncateSentence(self, s: str, k: int) -> str:
    # create variable returnStr and set it equal to an empty string
    returnStr = ""
    # create variable listOfWords and set it equal to the split result of s.
    # With no arguments given to split, s will be split on spaces.
    listOfWords = s.split()
    # create variable i and set it to 0
    i = 0
    # while k is greater than 0
    while k > 0:
      # append the item at index i of listOfWords to returnStr
      returnStr += listOfWords[i]
      # if k is not equal to 1
      if k != 1:
        # append a space to returnStr
        returnStr += " "
      # increment i
      i += 1
      # decrement k
      k -= 1
    return returnStr