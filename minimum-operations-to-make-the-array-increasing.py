class Solution:
    def minOperations(self, nums: List[int]) -> int:
        operations = 0
        head, *rest = nums
        for n in rest:
            if n <= head:
                operations += (head - n) + 1
                head = head + 1
            else:
                head = n
        return operations
