class Solution:
  # define function shuffle, that takes in the class instance, a List of integers called
  # nums, and an integer called n, and returns a List of integers
  def shuffle(self, nums: List[int], n: int) -> List[int]:
    # create an empty List called output
    output = []
    # loop from 0 to n
    for i in range(n):
      # append both nums[i] and nums[i + n] to output
      output.extend([nums[i], nums[i + n]])
    return output