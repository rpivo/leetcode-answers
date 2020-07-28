class Solution:
  # define function kidsWithCandies, that takes in the class instance, a List of integers called candies,
  # and an integer called extraCandies, and returns a List of booleans
  def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
    # the max() function returns the largest item in an iterable
    
    # create max_list, a variable that is the largest item in candies
    max_list = max(candies)
    # create an empty List called output
    output = []
    # loop through the items in List candies
    for i in range(len(candies)):
      # if the current item + extraCandies is greater than or equal to Int max_list
      if candies[i] + extraCandies >= max_list:
        # append True to List output
        output.append(True)
      else:
        # append False to List output
        output.append(False)
    return output