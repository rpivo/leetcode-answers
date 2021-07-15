# define class Solution
class Solution:
    # define function findCenter, which takes in the class instance (self), a
    # list of lists of integers called edges, and returns an integer.
    def findCenter(self, edges: List[List[int]]) -> int:
        # if the first item in the first list in list edges is equal to the
        # first item in the second list of edges, or if the first item in the
        # first list of edges is equal to the second item in the second list
        # of edges
        if edges[0][0] == edges[1][0] or edges[0][0] == edges[1][1]:
            # return the first item in the first list of edges
            return edges[0][0]
        # else, if the second item in the first list of edges is equal to the
        # first item in the second list of edges, or if the second item in the
        # first list of edges is equal to the second item in the second list
        # of edges
        elif edges[0][1] == edges[1][0] or edges[0][1] == edges[1][1]:
            # return the first item in the second list of edges
            return edges[0][1]
