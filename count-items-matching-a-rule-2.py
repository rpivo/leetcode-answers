# define class Solution
class Solution:
    # define function countMatches, which takes in the class instance (self), a list of lists of
    # strings called items, a string called ruleKey, and a string called ruleValue, and returns an
    # integer.
    def countMatches(self, items: List[List[str]], ruleKey: str, ruleValue: str) -> int:
        # create a dictionary called rule_maps with some initialized keys and values.
        rule_maps = {
            "type": 0,
            "color": 1,
            "name": 2
        }
        # create variable count and initialize as 0.
        count = 0
        # loop through each item in items.
        for item in items:
            # the value of item at key rule_maps at key ruleKey is equal to ruleValue
            if item[rule_maps[ruleKey]] == ruleValue:
                # increment count by 1
                count += 1
        # return count
        return count
