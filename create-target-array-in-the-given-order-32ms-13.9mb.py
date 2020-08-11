class Solution:
  def createTargetArray(self, nums: List[int], index: List[int]) -> List[int]:
    l = []
    for i, item in enumerate(nums): l.insert(index[i], item)
    return l