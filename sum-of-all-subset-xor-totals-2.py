# define class Solution
class Solution:
    # define function subsetXORSum, which takes in the class instance (self), a
    # variable called nums, and returns an integer
    def subsetXORSum(self, nums) -> int:
        # create variable bits and set it equal to 0
        bits = 0
        # loop through each item in nums
        for a in nums:
            # here, bits is (at least at first) an integer, and a is an integer
            # set bits equal to bits | a -- that is, perform a bitwise or
            # operation on bits and a.
            bits |= a
        # return bits times the result of this operation:
        # get the integer from this operation:
        # call the pow() method to perform an exponential operation.
        # use 2 for the base.
        # use the length of nums - 1 as the exponential value.
        # if nums is [1, 2, 3], then the exponent here would be 2.

        # note that 2 ^ (n - 1) is exactly half of 2 ^ n
        return bits * int(pow(2, len(nums) - 1))

        # so, what's going on here?

        # is there some relationship between XOR and OR?

        # here, we are performing a single loop to get an OR summation of the
        # nums list.

        # however, the original problem called for a XOR summation.

        # we takes this OR summation (bits) and multiply it by an exponent
        # operation.

# subsetXORSum(self, [1, 3]) -> int:
#   bits = 0
#   for a in nums:
#     bits |= a
#     # 0 | 1 = 1
#     # 1 | 3 = 3
#   return 3 * int(pow(2, 2 - 1))
#   # pow(2, 1)
#   # int(2)
#   # 3 * 2
#   # 6

# somehow, this kind of answer is related to bitmasking.

# apparently, bitmasking can also be used when trying to perform an operation
# on all subsets of a given set.

# for a set {1, 2, 3, ... N}
# the set has exactly 2^n subsets

# when trying to find all possible subsets of a list, we can represent each 
# subset as a list of bits.
# ex:
# [5, 2, 3]
# [] = [0, 0, 0]

# it appears that the solution here is:
# getting the OR sum of each item in nums. Ex: [1, 3, 2] -> 1 | 3 | 2
# then it gets half of the total number of subsets with int(pow(2, len(nums) - 1))
# and then it multiplies the OR sum by this amount.

# Say we have a list [3, 2, 5]

# these are represented in bits as:
# [
#   011,
#   010,
#   101,
# ]

# What does it mean to get the OR sum of this list, or to get the XOR sum of 
# this list?

# OR
# 000 | 011 = 011
# 011 | 010 = 011
# 011 | 101 = 111 = 7

# XOR
# 000 ^ 011 = 011
# 011 ^ 010 = 001
# 001 ^ 101 = 100 = 4
