class Solution:
  # define function isArmstrong that takes in the class instance, and an integer called N, and 
  # returns a boolean
  def isArmstrong(self, N: int) -> bool:
    # convert N to a string. for each character in this string (denoted as _), take that single 
    # character and convert it to an integer. Use the exponent operator (**) on this new digit, and
    # make the exponent be the value of the length of N converted to a string (and that length 
    # converted to an integer). After this list comprehension is finished, get the sum of the list 
    # and check to see if it's equal to N.
    return sum([int(_) ** int(len(str(N))) for _ in str(N)]) == N
    