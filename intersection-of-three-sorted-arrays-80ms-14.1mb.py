class Solution:
  # define function arraysIntersection that takes in the class instance, a list of integers called
  # arr1, a list of integers called arr2, a list of integers called arr3, and returns a list of 
  # integers.
  def arraysIntersection(self, arr1: List[int], arr2: List[int], arr3: List[int]) -> List[int]:
    # the collections module implements specialized container datatypes providing alternatives to 
    # Python's general purpose built-in containers, which are: dict, list, set, and tuple.

    # Counter is a dict subclass for counting hashable objects.
    # It is an unordered collection where elements are stored as dictionary keys and their counts 
    # are stored as dictionary values.

    # this will count all the values from arr1, arr2, and arr3 as if it were a single item.

    # example result - Counter({1: 3, 5: 3, 2: 2, 3: 2, 4: 2, 7: 1, 9: 1, 8: 1})
    # 1 occurred 3 times
    # 5 occurred 3 times
    # 2 occurred 2 times
    # 3 occurred 2 times
    # 4 occurred 2 times
    # 7 occurred 1 time
    # 9 occurred 1 time
    # 8 occurred 1 time
    dict1 = collections.Counter(arr1 + arr2 + arr3)
    # create list res and initialize empty
    res = []
    # for each key denoted as x in dict1
    for x in dict1:
      # if the value at dict1 where key is equal to x is equal to 3
      if dict1[x] == 3:
        # append x to res
        res.append(x)
    return res