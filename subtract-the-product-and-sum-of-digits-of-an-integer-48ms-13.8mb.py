class Solution:
  def subtractProductAndSum(self, n: int) -> int:
    l = list(str(n))
    product = reduce(lambda i, j: int(i) * int(j), l)
    sum = reduce(lambda i, j: int(i) + int(j), l)
    return int(product) - int(sum)