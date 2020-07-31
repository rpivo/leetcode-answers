class Solution:
  # define function numJewelsInStones, that takes in the class instance, a string called J, and a string called S, and returns an integer
  def numJewelsInStones(self, J: str, S: str) -> int:
    # declare a variable called c initialized to 0 
    c = 0
    # declare a dictionary called d and initialize it empty
    d = {}
    # for each char i in str S
    for i in S:
      # set d at key i with the value of d at key i + 1. if d[i] doesn't exist, then do 0 + 1
      d[i] = d.get(i, 0) + 1
    # for each char i in str J
    for i in J:
      # if char i is a key in d
      if i in d:
        # set c equal to c plus the value of d at key i
        c = c + d[i]
    return c