class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        l = [0]
        for n in gain:
            l.append(n + l[-1])
        return max(l)
