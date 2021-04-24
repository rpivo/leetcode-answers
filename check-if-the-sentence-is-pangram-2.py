# declare class Solution
class Solution:
    # declare method checkIfPangram, which takes in self (class instance) and a string called 
    # sentence, and returns a boolean.
    def checkIfPangram(self, sentence: str) -> bool:
        # create variable filtered.
        # To get the result of filtered, we:
        # The [*sentence] syntax uses python's unpacking operator.
        # This is similar to JavaScript's generator/yield asterisk syntax.
        # for the second argument of the lambda function, we are generating a list that contains 
        # each character in the sentence using Iterable Unpacking.
        # We then filter this list using the isAlpha() string method.
        # filter returns an iterator, which we then convert to a list, and then to a set.
        # converting the list to a set will remove duplicate values.
        filtered = set(list(filter(lambda x: x.isalpha(), [*sentence])))
        # then, we check that the length of filtered is equal to 26.
        return len(filtered) == 26
