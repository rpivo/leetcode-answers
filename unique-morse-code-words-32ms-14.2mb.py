# define class Solution
class Solution:
    # define function uniqueMorseRepresentations, which takes in the class instance (self), a list
    # of strings called words, and returns an integer
    def uniqueMorseRepresentations(self, words: List[str]) -> int:
      # make new list called morse_codes that contains morse code values for each letter of the 
      # alphabet
      morse_codes = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..',
                       '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..']
      # create variable s that is an as yet empty set
      s = set()

      # loop through each word in list words
      for word in words:
        # create variable temp and set it equal to an empty string
        temp = ''
        # for each character c in word
        for c in word:
          # the ord() function returns an integer representing the Unicode character.
          # the ord() function takes a single parameter: a unicode character.
          # here, we are passing the character c as a unicode character to ord().
          # This will return a value greater than 97.
          # We then subtract 97, givengin us the index we need to retrieve the correct morse code
          # value inside list morse_codes.
          temp += morse_codes[ord(c) - 97]
        # add is probably the equivalent to the list method append, but for sets.
        # we are adding the temp value to set s.
        s.add(temp)
      # return the length of set s
      return len(s)