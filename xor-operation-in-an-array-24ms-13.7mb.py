class Solution:
  # define function xorOperation, that takes in the class instance, an integer called n, and an 
  # integer called start, and returns an integer
  def xorOperation(self, n: int, start: int) -> int:
    # create copy of start called j
    j = start
    # loop from 0 to n - 1
    for i in range(n - 1):
      # set j equal to the bitwise XOR result of j and (start plus 2 times (i plus 1))
      j = j ^ (start + 2 * (i + 1))
    return j