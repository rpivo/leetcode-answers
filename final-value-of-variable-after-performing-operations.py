class Solution:
    def finalValueAfterOperations(self, operations: List[str]) -> int:
        str = ''.join(operations)
        dec = str.count('--')
        inc = str.count('++')
        return inc - dec
