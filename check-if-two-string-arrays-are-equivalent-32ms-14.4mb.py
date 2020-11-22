# declare class Solution
class Solution:
  # define function arrayStringsAreEqual that takes in the class instance, a list of strings 
  # called word1, and a list of string called word2, and returns a boolean
  def arrayStringsAreEqual(self, word1: List[str], word2: List[str]) -> bool:
    # call the join string method on word1 and check if it's equal to the value of the result of 
    # running the string method join on word2
    return ''.join(word1) == ''.join(word2)