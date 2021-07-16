from typing import List


class Solution:
    def maxProductDifference(self, nums: List[int]) -> int:
        min1, min2, *rest, max1, max2 = sorted(nums)
        return (max1 * max2) - (min1 * min2)


c = Solution()
print(c.maxProductDifference([4, 2, 5, 9, 7, 4, 8]))
