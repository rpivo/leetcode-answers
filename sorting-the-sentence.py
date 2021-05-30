class Solution:
    def sortSentence(self, s: str) -> str:
        d = {word[-1]: word[:-1] for word in s.split(' ')}
        d_sorted = dict(sorted(d.items()))

        return ' '.join([word for word in d_sorted.values()])
