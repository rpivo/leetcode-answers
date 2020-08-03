class Solution:
  def xorOperation(self, n: int, start: int) -> int:
    l = [start + i * 2 for i in range(n)]
    # reduce() takes first two items in an iterable and performs a lambda
    # in this case, the lambda is i ^ j
    # each successive item in the iterable is run through the lambda: result ^ next item
    # the final argument to reduce is the iterable to run through the lambda

    # the bitwise XOR operator sets the bits in the result to 1 if either, but not both, of the 
    # corresponding bits in the two operands is 1
    return reduce(lambda i, j: i ^ j, l)