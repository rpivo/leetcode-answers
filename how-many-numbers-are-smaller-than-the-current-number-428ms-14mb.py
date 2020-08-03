class Solution:
  def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:
    result = [0] * len(nums)
    copy = nums.copy()
    while len(copy):
      maxNum = copy.pop(copy.index(max(copy)))
      # create a list called indices
      # enumerate() allows us to loop over something and have an automatic counter. 

      # add index i to the list for each index of value x in nums where x is equal to maxNum
      indices = [i for i, x in enumerate(nums) if x == maxNum]
      for index in indices: result[index] = len(copy)
    return result