# import the Counter class from collections. This class is essentially a
# dictionary of keys, and their values are the number of occurrences for each
# item in a given list.
from collections import Counter

# define class Solution
class Solution:
    # define function areOccurrencesEqual, which takes in the class instance
    # (self), string s, and returns a boolean
    def areOccurrencesEqual(self, s: str) -> bool:
        # create a new Counter from string s, and then create a set from the values
        # of this Counter. if that set's length is equal to 1, return True. Else,
        # return False.
        return len(set(Counter(s).values())) == 1
