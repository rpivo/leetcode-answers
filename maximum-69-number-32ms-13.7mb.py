class Solution:
  # define maximum69number that takes in the class instance and an integer called num, and returns
  # an integer
  def maximum69number (self, num: int) -> int:
    # conver num to a string, and replace the first occurrence of '6' with '9'. then return this 
    # full string as an integer.
    return int(str(num).replace('6', '9', 1))