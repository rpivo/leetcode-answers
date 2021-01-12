# declare class Solution
class Solution:
  # define function countConsistentStrings, which takes in the class instance self, a string 
  # called allowed, a list of strings called words, and returns an integer
  def countConsistentStrings(self, allowed: str, words: List[str]) -> int:
    # ascii_lowercase is a string constant that contains 'abcdefghijklmnopqrstuvwxyz'.

    # inside map, we are subtracting one set from another.
    # this will delete any items from the first set that are found in the second set.

    # isdisjoint returns True if two sets have no common elements.
    # Here, we're passing in a lambda function to map as the first argument.
    # That lambda is (set(ascii_lowercase) - set(allowed)).isdisjoint.
    # For each word in words, we call that lambda:
    # (set(ascii_lowercase) - set(allowed)).isdisjoint(word)

    # This map will produce a list of boolean values. Ex: [True, True, False]

    # We can call sum() on these boolean values, which will sum the truthy values in the list
    return sum(map((set(ascii_lowercase) - set(allowed)).isdisjoint, words))
