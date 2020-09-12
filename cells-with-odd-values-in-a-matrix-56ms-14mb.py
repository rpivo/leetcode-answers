class Solution:
  # define function oddCells that takes in the class instance, and integer called n, an integer 
  # called m, and a list of lists of integers, and returns an integer
  def oddCells(self, n: int, m: int, indices: List[List[int]]) -> int:
    # create empty list called arr
    arr = []
    # loop from 0 to n
    for i in range(n):
      # append [0] m times to arr
      arr.append([0] * m)
    # create two variables, r_dict (row dictionary) and c_dict (column dictionary), and set them 
    # equal to empty dictionaries
    r_dict, c_dict = {}, {}
    # loop through each index in indices
    for i in indices:
      # if the x value of i is not in r_dict
      if i[0] not in r_dict:
        # set the value of r_dict at the x value of i equal to 1
        r_dict[i[0]] = 1
      else:
        # increment the value of r_dict at the x value of i
        r_dict[i[0]] += 1
      # if the y value of i is not in c_dict
      if i[1] not in c_dict:
        # set the value of c_dict at the y value of i equal to 1
        c_dict[i[1]] = 1
      else:
        # increment the value of c_dict at the y value of i
        c_dict[i[1]] += 1
    # create variables r_even, r_odd, c_even, c_odd and initialize all as 0
    r_even, r_odd, c_even, c_odd = 0, 0, 0, 0
    # loop through the keys of r_dict
    for r in r_dict.keys():
      # if modulus the value of r_dict at key r is 0
      if r_dict[r] % 2 == 0: 
        # increment r_even
        r_even += 1
      else:
        # increment r_odd
        r_odd += 1
    # loop through the kys of c_dict
    for c in c_dict.keys():
      # if modulus the value or c_dict at key c is 0
      if c_dict[c] % 2 == 0:
        # increment c_even
        c_even += 1
      else:
        # increment c_odd
        c_odd += 1
    # create variable Res and set it equal to r_odd times c_even plus r_odd times the result of m 
    # minus c_even minus c_odd plus c_odd times r_even plus c_odd times the result of n minus 
    # r_even minus r_odd
    Res =
      r_odd * c_even + r_odd * (m - c_even - c_odd) + c_odd * r_even + c_odd * (n - r_even - r_odd)
    return Res