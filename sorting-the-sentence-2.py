# define class Solution
class Solution:
    # define function sortSentence, which takes in the class instance (self),
    # and string s, and returns a string.
    def sortSentence(self, s: str) -> str:
        # create variable words, which is a list that is the result of
        # splitting s.
        words = s.split()
        # we then sort the words list, and we pass in a key argument to the
        # sort. The key is a lambda function that identifies on what key we'll
        # be sorting the list. Here we are sorting based on the last character
        # of the word (w[-1])
        words.sort(key=lambda w: w[-1])
        # we then create a new string by joining words on a space. We take
        # each word and remove the last character from the word, and then we
        # join these words.
        return ' '.join(w[:-1] for w in words)
