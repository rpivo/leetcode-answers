# class Solution
class Solution:
    # function targetIndices takes in the class instance (self), a list of
    # integers called nums, an integer called target, and returns a list of
    # integers
    def targetIndices(self, nums: List[int], target: int) -> List[int]:
        # sort nums
        nums.sort()
        try:
            # The index() method returns the index of the specified element in
            # the list.
            # set s equal to the index of target within nums.
            s = nums.index(target)
        # if target doesn't exist in nums, return []
        except:
            return []
        # set e equal to s
        e = s
        # loop from index s plus 1 to the end of nums
        for i in range(s+1, len(nums)):
            # if the value of nums at index i is equal to the value of nums at
            # index s...
            if nums[i] == nums[s]:
                # set e equal to i
                e = i
        # return a list for each each index i in the range of s to e plus 1
        return [i for i in range(s, e+1)]
