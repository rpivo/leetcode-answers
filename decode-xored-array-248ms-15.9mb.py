# declare class Solution
class Solution:
  # define function decode, which takes in the class instance (self), a list of integers called 
  # encoded, an integer called first, and returns a list of integers
  def decode(self, encoded: List[int], first: int) -> List[int]:
    # create new list that contains one integer: first
    res = [first]
    # loop through each item in encoded
    for i in encoded:
      # append the result of an xor operation between the value of i and the last item in list res
      res.append(i ^ res[-1])
    return res
    