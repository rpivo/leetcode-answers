# define class Solution
class Solution:
    # define function replaceDigits, which takes in the class instance (self), string s, and
    # returns a string.
    def replaceDigits(self, s: str) -> str:
        # create variable alpha, which is a list of all alphabetical characters in order.
        alpha = list("abcdefghijklmnopqrstuvwxyz")
        # create variable res and initialize as an empty string
        res = ""
        # create variable i and initialize as 0
        i = 0

        # define function current, which takes in letter
        def current(letter):
            # define variable i and initialize as 0
            i = 0
            # while letter is not equal to the value of alpha at index i
            while letter != alpha[i]:
                # increment i by 1
                i += 1
            return i
        # while i is less than the length of s
        while i < len(s):
            # set res equal to res plus the value of s at index i
            res += s[i]
            # if i plus 1 is less than the length of s
            if (i + 1) < len(s):
                # set res equal to res plus the value of alpha at the return value of current with
                # the value of s at index i passed in, plus the value of s at index i plus 1,
                # converted to an integer.
                res += alpha[current(s[i]) + int(s[i+1])]

            # increment i by 2.
            i += 2
        return res
