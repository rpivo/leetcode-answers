class Solution:
    def targetIndices(self, nums: List[int], target: int) -> List[int]:
        result = []
        for i, n in enumerate(sorted(nums)):
            if n is target:
                result.append(i)
        return result
