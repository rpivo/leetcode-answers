class Solution:
  # define function decompressRLElist, that takes in the class instance, and a list of integers 
  # named nums, and returns a list of integers
  def decompressRLElist(self, nums: List[int]) -> List[int]:
    # create empty list named result
    result = []
    # this is a quick way of saying i = 0 and multiplier = 1
    i, multiplier = 0, 1
    # while i is less than the length of nums
    while (i < len(nums)):
      # if i is an even number
      if i % 2 == 0:
        # assign multiplier the value of nums at i
        multiplier = nums[i]
      else:
        # get the value of nums at index i and convert it to a string. then append ',' to it. then
        # multiply that string by multiplier
        # set new variable tmp equal to the result of the above
        tmp = (str(nums[i]) + ',') * multiplier
        # append tmp to result, removing the last comma
        result.append(tmp[:-1])
      # increment i for the while
      i += 1
    # this can return a list that looks like ['2', '4,4,4'], and python will accept this list as 
    # [2,4,4,4] (or, at least, the leetcode compiler will)
    return result