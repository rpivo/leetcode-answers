class Solution:
  def numIdenticalPairs(self, nums: List[int]) -> int:
    count = 0
    inputLength = len(nums)
    for i in range (0, inputLength):
      for j in range (i, inputLength - 1):
        if (nums[i] == nums[j + 1]): count += 1
    return count