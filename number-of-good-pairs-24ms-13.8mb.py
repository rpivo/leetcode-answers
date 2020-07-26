class Solution:
  # define function numIdenticalPairs that takes in the class
  # instance and a List of integers called nums, and returns an integer
  def numIdenticalPairs(self, nums: List[int]) -> int:

    # python has a few built-in containers: dict, list, set, and tuple

    # a dict is similar to an object in javascript. it's a set of key:value pairs.
    # lists are similar to arrays in javascript.
    # sets are like lists without duplicates. this is similar to how sets work in javascript.
    # unlike lists, tuples are immutable, and they usually contain heterogenous data types.

    # the collections module implements specialized container datatypes
    # providing alternatives to Python's general purpose built-in containers,
    # dict, list, set, and tuple.

    # collections.Counter is a dict subclass for counting hashable objects. It
    # is a collection where elements are stored as dictionary keys and their
    # counts are stored as dictionary values. Counts are allowed to be any integer
    # value including zero or negative counts. The Counter class is similar to
    # bags or multisets in other languages.

    # for Counters, elements are counted from an iterable or initialized from
    # another mapping (or counter).

    # an iterable is an object capable of returning its members one at a time.
    # examples of iterables include all sequence types (such as list, str, and
    # tuple), and some non-sequence types like dict, file objects, and objects
    # of any classes you define with an __iter__() method or with a __getitem__()
    # method that implements Sequence semantics.

    # iterables can be used in a for loop and in many other places where a sequence
    # is needed (zip(), map(), ...). When an iterable object is passed as an
    # argument to the built-in function iter(), it returns an iterator for the
    # object. This iterator is good for one pass over the set of values. When using
    # iterables, it is usually not necessary to call iter() or deal with iterator
    # objects yourself. The for statement does that automatically for you, creating
    # a temporary unnamed variable to hold the iterator for the duration of the
    # loop.

    # a mapping is a container object that supports arbitrary key lookups and
    # implements the methods specified in the Mapping or MutableMapping abstract
    # base classes. Examples include dict, collections.defaultdict, collections.OrderedDict,
    # and collections.Counter.

    # an object is hashable if it has a hash value which never changes during
    # its lifetime (it needs a __hash__() method), and can be compared to other
    # objects (it needs an __eq__() method). Hashable objects which compare
    # equal must have the same hash value.

    # hashability makes an object usable as a dictionary key and a set member,
    # because these data structures use the hash value internally.

    # all of python's immutable built-in objects are hashable, while no mutable
    # containers (such as lists or dictionaries) are. Objects which are instances
    # of user-defined classes are hashable by default; they all compare unequal,
    # and their hash value is their id().

    # so, A is a counter created from the nums list.

    # for input [1, 2, 3, 1, 1, 3], this would produce the following Counter dict:
    # { 1: 3, 3: 2, 2: 1 }
    A = collections.Counter(nums)
    # create variable ans and initialize it to 0
    ans = 0
    # loop through all keys in A. here we are using the keys() method that is available to
    # mappings.
    for i in A.keys():

      # there are two types of division operators in python.
      # 1. ordinary division, with the / operator.
      # 2. floor division, with the // operator.

      # floor division works different in python3 as compared to python2.

      # in python2, int/int = int.

      # for perfect divisions, both ordinary and floor divisions produce the same result.
      # >>> 10/2
      # 5
      # >>> 10//2
      # 5
      # >>> 10/5
      # 2
      # >>> 10//5
      # 2

      # but for imperfect divisions:
      # >>> 10 / 3
      # 3.33333333
      # >>> 10 // 3
      # 3
      # >>> 10 / 3.0
      # 3.3333333333
      # >>> 10 // 3.0
      # 3.0

      # set ans equal to the current value of ans plus the current counter item in A times

      # on first pass, this would be:
      # 0 += 3 * (3 - 1) // 2
      # 0 += 3 * 2 // 2
      # 0 += 6 // 2
      # 0 += 3

      # on second pass, this would be:
      # 3 += 2 * (2 - 1) // 2
      # 3 += 2 * 1 // 2
      # 3 += 2 // 2
      # 3 += 1

      # on third pass, this would be:
      # 4 += 1 * (1 - 1) // 2
      # 4 += 1 * 0 // 2
      # 4 += 0

      # why does this work?
      # this works because finding all pairs forms a triangular number.
      # if [n], then there are 0 pairs.
      # if [n, n], then there is 1 pair.
      # if [n, n, n], there there are 3 pairs.
      # if [n, n, n, n], then there are 6 pairs.

      # n(n + 1) / 2

      # the version below is a modified form of the equation above.
      # if the count for the given item is only 1, then 1 * (1 - 1) // 2 = 0
      # not sure the floor division is absolutely necessary, but I get the choice.
      ans += A[i] * (A[i] - 1) // 2
    return ans