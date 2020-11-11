# define class Solution
class Solution:
  # define function highFive, that takes in the class instance self, a variable called items that's
  # a list of lists of integers, and returns a list of lists of integers
  def highFive(self, items: List[List[int]]) -> List[List[int]]:
    # collections is a module that implements specialized container datatypes providing 
    # alternatives to Python's general purpose built-in containers, dict, list, set, and tuple.

    # defaultdict returns a new dictionary-like object. defaultdict is a subclass of the built-in 
    # dict class. It overrides one method and adds one writable instance variable. The reamining 
    # functionality is the same as for the dict class.
    # 
    # The first argument provides the inital value for the default_factory attribute; it defaults 
    # to None. All remaining arguments are treated the same as if they were passed to the dict 
    # constructor, including keyword arguments.

    # Usually, a Python dictionary throws a KeyError if you try to get an item with a key that is 
    # not currently in the dictionary. The defaultdict in contrast will simply create any items 
    # that you try to access (provided of course they do not exist yet).
    # 
    # To create such a "default" item, it calls the function object that you pass to the 
    # constructor (more precisely, it's an arbitrary "callable" object, which includes function and
    # type objects).
    #
    # Using defaultdict is different than using dict.get(key, default_val). While these look like 
    # they would be functionally equivalent, d.get(key, default_val) won't ever modify the 
    # dictionary -- it will just return the default value and leave the dictionary unchanged. 
    # defaultdict, on the other hand, will insert a key into the dictionary if it isn't there yet. 
    # This is a big difference.

    # defaultdict means that if a key is not found in the dictionary, then isntead of a KeyError 
    # being thrown, a new entry is created. The type of this new entry is given by the argument of
    # defaultdict.

    # somedict = {}
    # print(somedict[3]) # keyError
    #
    # someddict = defaultdict(int)
    # print(someddict[3]) # print int(), thus 0

    # given the info above, we are creating a variable called d and setting it equal to a 
    # defaultdict. If a key is not find in d, a new list will be added to d at that key
    d = collections.defaultdict(list)
    # loop through each item in items
    for item in items:
      # append the element at index 1 inside item to th element at index 0 inside item.
      d[item[0]].append(item[1])
    
    # we return a list comprehension.
    # 
    # in Python 3 the dict method items() returns an iterator where we can access the key and the 
    # value of each key in the dict
    # 
    # for each of these items where we are pulling off an id (key) and scores (value of key), we 
    # are adding a new list of integers to a parent list.
    #
    # each new list is composed of two items: the id, and the highest 5 values from the scores 
    # list, summed together and then divided with integer division.

    # The syntax [-5] means we are getting the last five values in the list.
    #
    # sorted() will sort a list of items from lowest to highest, which means we'll get the five 
    # highest items.

    # I had to wrap this in an additional sorted() for the outer list to sort the inner lists
    return sorted([[id, sum(sorted(scores)[-5:]) // 5] for id, scores in d.items()])
