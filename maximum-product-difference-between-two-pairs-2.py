# define class Solution
class Solution:
    # define function maxProductDifference, which takes in the class instance
    # (self), a list of integers called nums, and returns an integer.
    def maxProductDifference(self, nums: List[int]) -> int:
        # the list method sort() will sort the list in place, mutating the
        # original list. Now nums is sorted.
        nums.sort()
        # return the result of multiplying the last item in nums with the
        # second to last item in nums minus the result of multiplying the
        # first item in nums with the second item in nums.
        return nums[-1] * nums[-2] - nums[0] * nums[1]
