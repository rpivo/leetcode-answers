# define class Solution
class Solution:
    # define function minOperations, which takes in the class instance (self), a
    # list of integers called nums, and returns an integer.
    def minOperations(self, nums: List[int]) -> int:
        # set both ans and prev equal to 0
        ans = prev = 0
        # for each item in nums, destructure it as cur
        for cur in nums:
            # if cur is less than or equal to prev
            if cur <= prev:
                # increment prev by 1
                prev += 1
                # increment ans by the value of prev minus cur
                ans += prev - cur
            else:
                # set prev equal to cur
                prev = cur
        return ans
