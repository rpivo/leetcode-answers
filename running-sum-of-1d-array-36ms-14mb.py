class Solution:
  # define runningSum(), which takes in class instance,
  # nums: a list of ints, and returns a list of ints
  def runningSum(self, nums: List[int]) -> List[int]:
    # loop through nums from 1 to length of nums
    for i in range(1, len(nums)):
      # set nums[i] equal to its current value plus the previous item in nums
      nums[i] += nums[i-1]
    return nums