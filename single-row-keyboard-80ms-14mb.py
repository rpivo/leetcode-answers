class Solution:
  # define function calculateTime, that takes in the class instance, a string called keyboard, and 
  # string called word, and returns an integer
  def calculateTime(self, keyboard: str, word: str) -> int:
    # create empty dictionary called hmap
    hmap = {}
    # create integer variable called total and initialize it to 0
    total = 0
    # create integer variable called last and initialize it to 0
    last = 0
    # loop through the count of the length of keyboard
    for i in range(len(keyboard)):
      # set the value of keyboard at count i on the dictionary hmap as a key, and give this key 
      # the value of count i
      hmap[keyboard[i]] = i

    # loop through the characters in word
    for ch in word:
      # set total equal to the previous value of total plus the absolute value of last minus the 
      # value of hmap at key ch
      total += abs(last - hmap[ch])
      # set last to the current iterated value of hmap, which is hmap at key ch
      last = hmap[ch]

    return total