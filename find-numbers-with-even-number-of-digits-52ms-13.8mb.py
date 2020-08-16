class Solution:
  # define function findNumbers that takes in the class instance, and a list of integers called 
  # nums, and returns an integer
  def findNumbers(self, nums: List[int]) -> int:
    # create variable called ans and initialize as 0
    ans = 0
    # loop through all items in nums
    for i in nums:
      # if the item i converted to a string has a length that is even
      if len(str(i)) % 2 == 0:
        # increment ans
        ans += 1
    return ans