class Solution:
    def getNumericalValue(self, word) -> str:
        return int(''.join([str(ord(c) - 97) for c in word]))

    def isSumEqual(self, firstWord: str, secondWord: str, targetWord: str) -> bool:
        return self.getNumericalValue(firstWord) + self.getNumericalValue(secondWord) == self.getNumericalValue(targetWord)
