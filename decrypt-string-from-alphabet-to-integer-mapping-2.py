# ascii_lowercase is the string 'abcdefghijklmnopqrstuvwxyz'
from string import ascii_lowercase

# define class Solution
class Solution:
    # define function freqAlphabets, which takes in the class instance (self),
    # string s, and returns a string
    def freqAlphabets(self, s: str) -> str:
        # set variable d to an empty dictionary
        d = {}
        # enumerate destructures the string ascii_lowercase into index i and
        # character c. The second argument of enumerate indicates the index at which
        # the count starts. In this case, the first destructured group is 1, 'a'.
        for i, c in enumerate(ascii_lowercase, 1):
            # set the value of d at index i to the value of c
            d[i] = c
        # set variable s_out to an empty string
        s_out = ""
        # set variable result to an empty list
        result = []
        # set variable point to the length of s minus 1
        pointer = len(s) - 1
        # while pointer is greater than or equal to 0
        while pointer >= 0:
            # if the value of s at index pointer is equal to "#"
            if s[pointer] == '#':
                # get the sublist of s from index pointer minus 2 to the value of
                # pointer converted to an integer. Use this value as the index for d.
                # Get the value of this index and append to s_out
                s_out += d[int(s[pointer - 2:pointer])]
                # subtract 3 from the value of pointer
                pointer -= 3
            else:
                # get the value of s at index pointer. Convert this value to an
                # integer. Use this value as the index for d. Append the value of d at
                # this index to s_out.
                s_out += d[int(s[pointer])]
                # decrement pointer by 1
                pointer -= 1
        # return the reversed value of s_out
        return s_out[::-1]
