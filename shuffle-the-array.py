from typing import List

class Solution:
    def shuffle(self, nums: List[int], n: int) -> List[int]:
      list = []
      halfwayPoint = len(nums) // 2
      for i in range(halfwayPoint):
        list.append(nums[i])
        list.append(nums[i + halfwayPoint])
      return list