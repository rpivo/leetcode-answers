class Solution:
    def replaceDigits(self, s: str) -> str:
        alphabet = 'abcdefghijklmnopqrstuvwxyz'
        result = ''

        for i, c in enumerate(s):
            if i % 2 == 0:
                result += s[i]
            else:
                result += alphabet[int(s[i]) + alphabet.index(s[i - 1])]

        return result
