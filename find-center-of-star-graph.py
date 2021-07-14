class Solution:
    def findCenter(self, edges: List[List[int]]) -> int:
        a, b, *rest = edges
        if a[0] in b:
            return a[0]
        return a[1]
