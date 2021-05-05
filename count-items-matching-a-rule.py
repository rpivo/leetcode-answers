class Solution:
    def countMatches(self, items: List[List[str]], ruleKey: str, ruleValue: str) -> int:
        m = {
            'type': 0,
            'color': 1,
            'name': 2,
        }

        r = 0

        for item in items:
            if item[m[ruleKey]] == ruleValue:
                r += 1
        return r
