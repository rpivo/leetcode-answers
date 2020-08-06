class Solution:
  def subtractProductAndSum(self, n: int) -> int:
    sum_digit = 0
    mul_digit = 1
    while n > 0:
      digit = n % 10
      sum_digit += digit
      mul_digit *= digit
      n = int(n / 10)
    return mul_digit - sum_digit