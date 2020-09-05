class Solution:
  # define function minTimeToVisitAllPoints that takes in the class instance and a list of lists 
  # of integers, and returns an integer
  def minTimeToVisitAllPoints(self, points: List[List[int]]) -> int:
    # destructure the x and y values off of the first list in points and name them currX and currY
    currX, currY = points[0]
    # create new variable time and initialize as 0
    time = 0
    # loop from the second list in points until the end, and destructure the x and y values for 
    # each iteration, naming them nextX and nextY
    for nextX, nextY in points[1:]:
      # set time equal to time plus the maximum value of either the absolute value of currX minus
      # next X or the absolute value of currY minus nextY
      time += max(abs(currX - nextX), abs(currY - nextY))
      # set currX and currY equal to the values of nextX and nextY for the upcoming iteration
      currX, currY = nextX, nextY
    return time