# define class Solution
class Solution:
    # define function busyStudent, which takes in the class instance (self), a
    # list of integers called startTime, a list of integers called endTime, an
    # integer called queryTime, and returns an integer
    def busyStudent(self, startTime: List[int], endTime: List[int], queryTime: int) -> int:
        # set res to 0
        res = 0
        # loop from 0 to the length of startTime
        for i in range(len(startTime)):
            # if the value of startTime at index i is less than or equal to
            # queryTime, and if the value of endTime at index i is greater than or
            # equal to queryTime
            if startTime[i] <= queryTime and endTime[i] >= queryTime:
                # increment res by 1
                res += 1
        return res
