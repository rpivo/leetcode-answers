class Solution:
  # define function anagramMappings that takes in the class instance, a list of integers called A, 
  # a list of integers called B, and returns a list of intgers
  def anagramMappings(self, A: List[int], B: List[int]) -> List[int]:
    # using list comprehension, return a list. go through each item in A as a. if a is also in B, 
    # then add B.index(a) to the new list. That is, add the index in B for value a.
    return [B.index(a) for a in A if a in B]