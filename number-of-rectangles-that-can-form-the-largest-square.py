class Solution:
    def countGoodRectangles(self, rectangles: List[List[int]]) -> int:
        l = [min(n) for n in rectangles]
        m = max(l)
        return len(list(filter(lambda x: x == m, l)))
