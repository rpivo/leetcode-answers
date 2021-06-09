# define class Solution
class Solution:
    # define function isSumEqual, which takes in the class instance (self),
    # string firstWord, string secondWord, string targetWord, and returns a
    # boolean.
    def isSumEqual(self, firstWord: str, secondWord: str, targetWord: str) -> bool:
        # create dictionary values that maps letters a through j to 0 through 9
        values = {'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4,
                  'f': 5, 'g': 6, 'h': 7, 'i': 8, 'j': 9}
        # create variable first_sum and set it equal to an empty string
        first_sum = ""
        # create variable second_sum and set it equal to an empty string
        second_sum = ""

        # loop through each character in firstWord
        for letter in firstWord:
            # get the value in dictionary values at key letter, convert it to a
            # string, and append it to first_sum
            first_sum += str(values[letter])

        # loop through each character in secondWord
        for letter in secondWord:
            # get the value in dictionary values at key letter, convert it to a
            # string, and append it to first_sum
            second_sum += str(values[letter])

        # coerce first_sum and second_sum into integers, add them together,
        # and store them in variable final_sum
        final_sum = int(first_sum) + int(second_sum)
        # create variable compared and set it equal to an empty string
        compared = ""

        # loop through each letter in targetWord
        for letter in targetWord:
            # get the value in dictionary values at key letter, convert it to a
            # string, and append it to compared
            compared += str(values[letter])

        # coerce compared into an integer and check if it's equal to final_sum
        if int(compared) == final_sum:
            return True

        return False
