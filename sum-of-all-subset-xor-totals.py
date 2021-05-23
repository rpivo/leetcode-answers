class Solution:
    def subsetXORSum(self, nums: List[int], i=0, x=0) -> int:
        if i == len(nums):
            return x
        else:
            return self.subsetXORSum(nums, i + 1, x ^ nums[i]) + self.subsetXORSum(nums, i + 1, x)
