class Solution:
  # define function sumOddLengthSubarrays, that takes in the class instance, a list of integers 
  # called arr, and returns an integer.
  def sumOddLengthSubarrays(self, arr: List[int]) -> int:
    # create variable total and initialize as 0
    total = 0
    # loop from 1 to the length of arr
    for i in range(len(arr)):
      # create variable totalisubarrays that's equal to the length of arr minus i times i plus 1
      totalisubarrays = (len(arr) - i) * (i + 1) # this represents total number of subarrays in list that has either i as start or end
      # if totalisubarrays is an odd number
      if totalisubarrays % 2 == 1:
        # increment totalisubarrays
        totalisubarrays += 1
      # perform integer division on totalisubarrays by 2, and store this in a new variable called 
      # oddisubarrays
      oddisubarrays = totalisubarrays // 2
      # total equals total plus the value of arr at index i times oddisubarrays
      total += arr[i] * oddisubarrays
    return total