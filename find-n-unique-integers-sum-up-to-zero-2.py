# define class Solution
class Solution:
    # define function sumZero, which takes in the class instance (self), integer
    # n, and retturns a list of intgers
    def sumZero(self, n: int) -> List[int]:
        # if n equals zero
        if n == 0:
            # return a list that contains the number zero
            return [0]
        if n % 2 == 0:
            # set variable output to an empty list
            output = []
            # for index in the range between 1 and n integer divided by 2 plus 1
            for i in range(1, n // 2 + 1):
                # append to output i, and the negative value of i
                output.extend([i, -i])
            return output
        else:
            # set variable output to a list that contains the number zero
            output = [0]
            # for index i in the range between 1 and n integer divided by 2 plus 1
            for i in range(1, n // 2 + 1):
                # append to output i, and the negative value of i
                output.extend([i, -i])
            return output
