class Solution:
  def diagonalSum(self, mat: List[List[int]]) -> int:
    result = 0
    length = None
    for index, row in enumerate(mat):
      if length is None: length = len(row)
      if index == length - index - 1: result += row[index]
      else: result += row[index] + row[length - index - 1]
    return result
