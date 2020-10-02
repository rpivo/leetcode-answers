class Solution:
  def sumOddLengthSubarrays(self, arr: List[int]) -> int:
    result = 0
    listLength = 1
    while (listLength <= len(arr)):
      for index, item in enumerate(arr):
        subList = arr[index:index + listLength]
        if (len(subList) == listLength): result += sum(subList)
      listLength += 2
    return result