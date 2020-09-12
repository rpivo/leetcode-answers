class Solution:
  def oddCells(self, n: int, m: int, indices: List[List[int]]) -> int:
    result = 0
    matrix = [[0 for col in range(m)] for row in range(n)]
    for [x, y] in indices:
      for i in range(0, m): matrix[x][i] += 1
      for row in matrix: row[y] += 1
    for row in matrix:
      for cell in row:
        if cell % 2 == 1: result += 1
    return result