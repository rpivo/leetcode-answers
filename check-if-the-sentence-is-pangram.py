class Solution:
    def checkIfPangram(self, sentence: str) -> bool:
        s = {c for c in sentence}
        return len(s) is 26
