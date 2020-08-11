class Solution:
  # define function createTargetArray that takes in the class instance, a list of integers called
  # nums, a list of integers called index, and returns a list of integers
  def createTargetArray(self, nums: List[int], index: List[int]) -> List[int]:
    # create empty list called target
    target = []
    # thie zip() function takes iterables (can be zero or more), aggregates them in a tuple, and 
    # returns it.

    # if zip() is called without passing any arguments, then it returns an empty iterator.  if you 
    # attempt to print the empty iterator, it will print a crazy value like 
    # '<zip object at 0x7fe94d07ae00>'. It can, however, be converted to a built-in iterable like a
    # list, and then when it's printed after conversion, it will be '[]'.

    # if a single iterable is passed to zip(), zip() will return an iterator of tuples with each tuple having elements from all the iterables

    # normally, zip is used to create an iterator that will aggregate elements from two or more iterables.

    # from the official documentation:
    # Returns an iterator of tuples, where the i-th tuple contains the i-th element from each of 
    # the argument sequences or iterables. The iterator stops when the shortest input iterable is 
    # exhausted. With a single iterable argument, it returns an iterator of 1-tuples. With no 
    # arguments, it returns an empty iterator.

    # Python zip operations work just like the pysical zipper on a bag or pair of jeans.

    # zip() example:

    # create a list of numbers called nums
    # nums = [1, 2, 3]

    # create a list of strings called letters
    # letters = ['a', 'b', 'c']

    # call zip() with numbers and letters and store it in variable zipped
    # zipped = zip(numbers, letters)

    # returns '<zip object at 0x7fa4831153c8>'
    # print(zipped)

    # returns '<class 'zip'>'
    # print(type(zipped))

    # returns [(1, 'a'), (2, 'b'), (3, 'c')]
    # print(list(zipped))

    # so, we can expect the return of zip to be an iterable that will be something like 
    # [(nums[0], index[0]), (nums[1], index[1]), ...(nums[n], index[n])]

    # then, we are pulling both values off of each tuple as n and i -- n being the values zipped 
    # from nums, and i being the values zipped from index
    for n, i in zip(nums, index):
      # insert into list target at index i the value n
      target.insert(i, n)
    return target