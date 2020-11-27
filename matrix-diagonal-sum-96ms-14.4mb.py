# declare class Solution
class Solution:
  # define function diagonalSum, which takes in the class instance (self), a list of lists of 
  # integers called mat, and returns an integer
  def diagonalSum(self, mat: List[List[int]]) -> int:
    # create variable total and initialize as 0
    total = 0

    # loop from 0 to the length of mat
    for i in range(len(mat)):
      # set total equal to total plus the value of mat at row i and column i plus the value of mat 
      # at row i and column -i minus 1. here -i should be a negative index, which would start at -1
      # (or the last item in the row), and work backward from there
      total += mat[i][i] + mat[i][-i - 1]
    # if the length of mat modulus 2 is not equal to 0, meaning there are an odd number of rows 
    # to mat
    if len(mat) % 2 != 0:
      # (int)(len(mat) / 2) looks to be a different way to perform integer division in python. 
      # The alternate (and maybe preferred approach) to this would be len(mat) // 2.

      # set total equal to total minus the value of mat at row length of mat integer divided by 
      # 2, and at column length of mat integer divided by 2.
      total -= mat[(int)(len(mat) / 2)][(int)(len(mat) / 2)]
    return total
    