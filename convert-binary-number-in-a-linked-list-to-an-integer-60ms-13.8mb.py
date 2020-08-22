class Solution:
  # define function getDecimalValue that takes in the class instance, a variable called head 
  # that's of type ListNode, and returns an int
  def getDecimalValue(self, head: ListNode) -> int:
    # create empty list named digits
    digits = []
    # create temp variable called current and store head there
    current = head
    # while current is truthy
    while current:
      # add current.val to list digits
      digits.append(current.val)
      # set current to current.next, the next item in the linked list
      current = current.next
    # create variable value and set it to 0
    value = 0
    # create value base and set it to 1
    base = 1
    # the reverse() function returns the reversed iterator of the given sequence
    # here we are looping through the digits list from the end to the beginning because we will be
    # able to convert binary to decimal starting from the last digit of the binary sequence and 
    # moving backwards to the first digit.
    for digit in reversed(digits):
      # the following is a way to convert a binary number into a decimal without using a built-in 
      # like int()

      # set value equal to value plus digit times base
      value += digit * base
      # set base equal to base times 2
      base *= 2
    return value
    