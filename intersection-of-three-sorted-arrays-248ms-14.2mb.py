class Solution:
  def arraysIntersection(self, arr1: List[int], arr2: List[int], arr3: List[int]) -> List[int]:
    result = []
    for item in arr1:
      if item in arr2 and item in arr3: result.append(item)
    return result