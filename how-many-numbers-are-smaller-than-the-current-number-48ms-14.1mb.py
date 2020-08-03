class Solution:
  # define function smallerNumbersThanCurrent, that takes in the class instance, and a list of 
  # integers called nums, and returns a list of integers
  def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:
    # create an empty dict called indices
    indices = {}
    # sorted() sorts a list in ascending order by default
    # for each item and its index in the list nums, sorted
    for idx, num in enumerate(sorted(nums)):
      # setdefault() will set the key num in dict indices to idx if the key does not already have a value
      indices.setdefault(num, idx)
      # return a list -- for each num in list nums, add to the returned list the value of indices[num]
    return [indices[num] for num in nums]