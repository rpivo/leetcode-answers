# define class Solution
class Solution:
    # define function countGoodRectangles, which takes in the class instance
    # (self), a list of lists of integers called rectangles, and returns an
    # integer
    def countGoodRectangles(self, rectangles: List[List[int]]) -> int:
        # note that the bracket notation is used for both dictionaries and sets.
        # An empty set of brackets, though, denotes an empty dictionary.

        # set variable ps to an empty dictionary.
        # ps here means either perfect squares, possible squares, or possible
        # solutions
        ps = {}
        # set variable mps equal to -1
        # this may denote "maximum perfect square" or "maximum possible side".
        # This is likely the length of the side to be checked.
        mps = -1
        # loop through each rectangle r in rectangles
        for r in rectangles:
            # get the minimum value in r and set it to mr
            mr = min(r)
            # if mr is greater than or equal to mps
            if mr >= mps:
                # set mps to mr
                mps = mr
                # set the key of mps in dictionary ps to the value of the key mps
                # in dictionary ps plus 1. If that value does not exist, set it to
                # 0 plus 1.
                ps[mps] = ps.get(mps, 0) + 1
        # return the value of mps in dictionary ps
        return ps[mps]

