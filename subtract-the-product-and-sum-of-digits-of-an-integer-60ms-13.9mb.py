class Solution:
  # define function subtractProductAndSum, that takes in the class instance, and an integer n, and 
  # returns an integer
  def subtractProductAndSum(self, n: int) -> int:
    # create variable sum_digit and initialize to 0
    sum_digit = 0
    # create variable mul_digit and initialize to 1
    mul_digit = 1
    # I'm assuming we're going to do some kind of division/subtraction on n, and it will 
    # eventually be a single digit
    while n >= 10:
      # create variable digit that is equal to the remainder of n divided by 10. this is a really
      # crafty way to pop off individual numbers from a multi-digit number.
      digit = n % 10
      # add this remainder to the current value of sum_digit
      sum_digit += digit
      # multiply this digit by the current value of mul_digit and then store the product in
      # mul_digit
      mul_digit *= digit
      # this looks to be a quick way to get a truncated, non-decimal integer value after a
      # division operation is performed.
      n = int(n / 10)
    # for the last digit, we still want to run these operations. maybe there is a better way to do 
    # this?
    sum_digit += n
    mul_digit *= n

    # create variable result that's equal to mul_digit minues sum_digit
    result = mul_digit - sum_digit
    return result