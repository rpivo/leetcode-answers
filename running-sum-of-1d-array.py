class Solution:
  def runningSum(self, nums: List[int]) -> List[int]:
    sum = 0
    list = []
    for i in range(len(nums)):
      sum += nums[i]
      list.append(sum)
    return list