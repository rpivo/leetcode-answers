class Solution:
  def isArmstrong(self, N: int) -> bool:
    result = 0
    digits = [int(d) for d in str(N)]
    for digit in digits: result += pow(digit, len(digits))
    return result == N