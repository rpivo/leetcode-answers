# define class Solution
class Solution:
    # define function finalValueAfterOperations, which takes in the class 
    # instance (self), a list of strings called operations, and returns an 
    # integer
    def finalValueAfterOperations(self, operations: List[str]) -> int:
        # create variable x and set it equal to 0
        x = 0
        # loop through each op in operations
        for op in operations:
            # if op is in the list ["X++", "++X"]
            if op in ["X++", "++X"]:
                # increment x by 1
                x += 1
            else:
                # decrement x by 1
                x -= 1
        return x