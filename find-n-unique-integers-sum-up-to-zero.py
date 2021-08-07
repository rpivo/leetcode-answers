class Solution:
    def sumZero(self, n: int) -> List[int]:
        l = []
        for num in range(1, n // 2 + 1):
            l.extend([num, -num])
        if n % 2 != 0:
            l.append(0)
        return l
