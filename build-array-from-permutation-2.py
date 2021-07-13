# define class Solution
class Solution:
    # define buildArray, which takes in the class instance (self), a list of
    # integers called nums, and returns a list of integers
    def buildArray(self, nums: List[int]) -> List[int]:
        # get the length of nums
        # loop from 0 to the length of nums (does not include the length of
        # nums). for each i in this range, get the value of nums at index i,
        # and use this value as a new index in nums. push this new value to
        # the end of a list that will be returned.
        return [nums[nums[i]] for i in range(len(nums))]
