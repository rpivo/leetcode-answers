class Solution:
  # define function numberOfSteps, that takes in the class instance, and an int call num, and returns an int
  def numberOfSteps(self, num: int) -> int:
    # create a variable called count and initialize it to 0
    count = 0
    # the bin() method converts and returns the binary equivalent string of a given integer. if the
    # parameter isn't an integer, it has to implement __index__() method to return an integer.

    # there will be a '0b' prefix returned from bin(), which will mean that the result is a binary
    # string

    # here, we are looping through the result of bin(num), starting at the third character (to
    # skip the '0b' prefix of the binary string).
    for bit in bin(num)[2:]:
      # the method below uses the binary equivalent of the original number so that we avoid both division and modulus operations.
      # pretty clever.
      # it's a bit hacky, since we have to return `count - 1` at the end, but it works.
      if bit == '1': count += 2
      else: count += 1
    return count - 1