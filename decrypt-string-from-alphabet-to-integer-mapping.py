class Solution:
    def freqAlphabets(self, s: str) -> str:
        r = ''
        l = len(s)
        i = 0
        while i < l:
            possible_pound_char_index = i + 2
            if possible_pound_char_index < l and s[possible_pound_char_index] == '#':
                r += self.getCharacterValue(s, i, possible_pound_char_index)
                i += 3
            else:
                r += self.getCharacterValue(s, i)
                i += 1
        return r

    def getCharacterValue(self, s: str, start: int, end: int = None) -> str:
        substr = s[start:end] if end else s[start]
        return chr(int(substr) + 96)
