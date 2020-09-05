class Solution:
  # define function countGoodTripletsCase1 that takes in the class instance, a list of integers 
  # called arr, an integer called a, and an integer called b, and returns an integer
  def countGoodTripletsCase1(self, arr: List[int], a: int, b: int) -> int:
    # create new variable count and set it equal to 0
    count = 0
    # loop from 1 to the length of arr minus 1
    for j in range(1, len(arr) - 1):
      # the sum() function adds the items of an iterable and returns the sum

      # create new variable l and set it equal to the sum of of every instance where the absolute
      # value of arr at index i minus arr at index j is less than or equal to a in the range of 0 through j
      l = sum(abs(arr[i] - arr[j]) <= a for i in range(0, j))
      # create new variable r and set it equal to the sum of every instance where the absolute 
      # value of arr at index j minus arr at index k is less than or equal to be in the range of j 
      # plus 1 through to the total length of arr
      r = sum(abs(arr[j] - arr[k]) <= b for k in range(j + 1, len(arr)))
      # set count equal to count plus l times r
      count += l * r
    return count

    # define function countGoodTripletsCase2 that takes in the class instance, a list of integers
    # called arr, an integer called a, an integer called b, an integer called c, and returns an 
    # integer
    def countGoodTripletsCase2(self, arr: List[int], a: int, b: int, c: int) -> int:
      # the sorted() function sorts the elements of a given iterable in a specific order (either 
      # ascending or descending) and returns the sorted iterable as a list

      # key is a function that will be called to transform the collection's items before they are 
      # compared. The parameter passed to key must be something that is callable.

      # if arr = [3,0,1,1,9,7], then the below code will return [1, 2, 3, 0, 5, 4]
      # len(arr) = 6
      # this returns the indices of the values in arr in the order of lowest to highest for these 
      # values
      # arr[1] = 0
      # arr[2] = 1
      # arr[3] = 1
      # arr[0] = 3
      # arr[5] = 7
      # arr[4] = 9
      # returns [1, 2, 3, 0, 5, 4]
      index = sorted(range(len(arr)), key = lambda k: arr[k])
      # create variable count and initialize as 0
      count = 0
      # loop from the length of arr minus 1 down to 0
      for j in range(len(arr) - 1, 0, -1):
        # loop from the value of j minus 1, down to -1
        for i in range(j - 1, -1, -1):
          # in python, break terminates the nearest enclosing loop, the for loop on line 47 in this 
          # case

          # if the value of index at j is equal to j, then break
          if index[j] == j: break
          # switch the location of items at indices j and i by setting index at j equal to index 
          # at index i, and by setting index at index i equal to index at index j
          index[j], index[i] = index[i], index[j]
        # loop from the value of j plus 2 to the length of arr
        for k in range(j + 2, len(arr)):
          # get the value of index at index k minus 1. then, get the value of arr using this value
          # as the index to retrieve from. if that value is greater than the value of arr at index 
          # index at index k
          if arr[index[k - 1]] > arr[index[k]]:
            # set the value of index at index k minus 1 equal to the value of index at index k, 
            # and set the value of index at index k equal to the value of index at index k minus 1
            index[k - 1], index[k] = index[k], index[k - 1]
          # the next() function returns the next item from the provided iterator.

          # in this case, the provided iterator is:
          #  (i for i in range(0, j) if arr[index[i]] >= arr[j] - a)

          # the next function also takes in a second optional parameter, which is the default 
          # value that is returned if the iterator is exhausted (there is no next item)

          # the default argument below is j

          # the default value is returned of the iterator has been exhausted

          # on the first pass of the for loop for j in range(len(arr) - 1, 0, -1), these are the 
          # values in the iterator (i for i in range(0, j) if arr[index[i]] >= arr[j] - a):
          # (i for i in range(0, 5) if arr[index[i]] >= arr[5] - 7)
          # (0 for 0 in range(0, 5) if arr[index[0]] >= arr[5] - 7)
          # (0 for 0 in range(0, 5) if arr[1] >= 7 - 7)
          # (0 for 0 in range(0, 5) if 0 >= 7 - 7)
          # (0 for 0 in range(0, 5) if 0 >= 0)
          # i_min = 0

          # second pass:
          # (0 for 0 in range(0, 4) if arr[index[0]] >= arr[4] - 7)
          # (0 for 0 in range(0, 4) if arr[1] >= 9 - 7)
          # (0 for 0 in range(0, 4) if 0 >= 2)
          # (1 for 1 in range(0, 4) if arr[index[1]] >= arr[j] - 7)
          # (1 for 1 in range(0, 4) if arr[2] >= arr[4] - 7)
          # (1 for 1 in range(0, 4) if 1 >= 9 - 7)
          # (1 for 1 in range(0, 4) if 2 >= 2)
          # (i for i in range(0, 4) if arr[index[i]] >= arr[4] - 7)
          # (2 for 2 in range(0, 4) if arr[index[2]] >= 9 - 7)
          # (2 for 2 in range(0, 4) if arr[3] >= 2)
          # (2 for 2 in range(0, 4) if 1 >= 2)
          # (i for i in range(0, 4) if arr[index[i]] >= arr[4] - 7)
          # (3 for 3 in range(0, 4) if arr[index[3]] >= 9 - 7)
          # (3 for 3 in range(0, 4) if arr[0] >= 2)
          # (3 for 3 in range(0, 4) if 3 >= 2)
          i_min = next((i for i in range(0, j) if arr[index[i]] >= arr[j] - a), j)
          # create variable i_max and set it equal to the first truthy value returned from next() 
          # iterating over the iterable (i for i in range(i_min, j) if arr[index[i]] > arr[j] + a).
          # If no truthy value is returned, return j

          # for the iterable, we are looping from the value i_min to the value j. using the value 
          # of index at index i, we get the value in arr with this value as the index. we then 
          # check to see if that value is greater than the value of arr at index j plus the value 
          # of a. If it is, then use this value as the return value of next().
          i_max = next((i for i in range(i_min, j) if arr[index[i]] > arr[j] + a), j)
          # create variables ic_min and ic_max and set them equal to i_min and i_max, respectively.
          ic_min, ic_max = i_min, i_max
          # create variable k and set it equal to the first truthy value returned from next() 
          # iterating over the iterable
          # (i for i in range(j + 1, len(arr)) if arr[index[i]] >= arr[j] - b). If no truthy value
          # is returned, retun the length of arr.

          # for the iterable, we are looping from the value of j plus 1 to the length of arr. using
          # the value of index at index i, we get the value in arr with this value as the index. We
          # then check to see if that value is greater than or equal to the value of arr at index j
          # minus b. If it is, then use this value as the return value of next.()
          k = next((i for i in range(j + 1, len(arr)) if arr[index[i]] >= arr[j] - b), len(arr))
          # while k is less than the length of arr and the value of arr at the index returned from 
          # the value of index at k is less than or equal to the value of arr at index j plus b
          while k < len(arr) and arr[index[k]] <= arr[j] + b:
            # while ic_min is less than i_max and the value of arr at the index value returned from
            # the value of index at index ic_min is less than the value of arr at the returned 
            # value from the value of index at index k minus c, increment ic_min
            while ic_min < i_max and arr[index[ic_min]] < arr[index[k]] - c: ic_min += 1
            # while ic_max is less than i_max and the value of arr at the index value returned 
            # from the value of index at index ic_max is less than or equal to the value of arr at 
            # the returned value from the value of index at index k plus c, increment ic_max
            while ic_max < i_max and arr[index[ic_max]] <= arr[index[k]] + c: ic_max += 1
            # set count equal to count plus ic_max minus ic_min
            count += ic_max - ic_min
            # increment k
            k += 1
        return count

  # define function countGoodTriplets that takes in the class instance, a list of integers called 
  # arr, an integer called a, an integer called b, an integer called c, and returns an integer
  def countGoodTriplets(self, arr: List[int], a: int, b: int, c: int) -> int:
    # if c is greater than or equal to a plus b
    if c >= a + b:
      # use countGoodTripletsCase1 to calculate the result
      return self.countGoodTripletsCase1(arr, a, b)
    else:
      # use countGoodTripletsCase2 to calculate the result
      return self.countGoodTripletsCase2(arr, a, b, c)