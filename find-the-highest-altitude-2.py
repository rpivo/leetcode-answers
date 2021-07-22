# define class Solution
class Solution:
    # define function largestAltitude, which takes in the class instance (self),
    # a list of integers called gain, and returns an integer.
    def largestAltitude(self, gain: List[int]) -> int:
        # here, we're assigning both max_alti and alti to 0
        max_alti = alti = 0
        # for each int i in list gain
        for i in gain:
            # set alti equal to alti plus i
            alti = alti + i
            # if alti is greater tha max_alti
            if alti > max_alti:
                # set max_alti equal to alti
                max_alti = alti
        return max_alti
