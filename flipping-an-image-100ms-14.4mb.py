# define class Solution
class Solution:
  # define function flipAndInvertImage, which takes in the class instance (self), and a list of 
  # lists of integers called A, and returns a list of lists of integers
  def flipAndInvertImage(self, A: List[List[int]]) -> List[List[int]]:
    # create variable B and set it equal to a list of lists, which is a copy of A, but each inner 
    # list is reversed.
    B = [i[::-1] for i in A]
    # loop from 0 to the length of B
    for i in range(len(B)):
      # loop from 0 to the length of row i
      for j in range(len(B[i])):
        # set the value of row i at index j equal to the absolute value of the value of index j at 
        # row i of B minus 1
        B[i][j] = abs(B[i][j] - 1)
    return B
