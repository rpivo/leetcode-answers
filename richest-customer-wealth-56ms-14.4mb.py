# declare class Solution
class Solution:
  # define function maximumWealth, which takes in the class instance (self), a list of lists of 
  # integers called accounts, and returns an integer
  def maximumWealth(self, accounts: List[List[int]]) -> int:
    # create a new list called totals and initialize as empty
    totals = []
    # loop through each item in accounts
    for banks in accounts:
      # create variable total and initialize as 0
      total = 0
      # loop through each item in banks
      for bank in banks:
        # set total equal to total plus bank
        total += bank
      # append this total to the totals list
      totals.append(total)
    # return the maximum value in totals
    return max(totals)
    