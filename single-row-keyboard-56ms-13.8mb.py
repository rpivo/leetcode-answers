class Solution:
  def calculateTime(self, keyboard: str, word: str) -> int:
    l = [keyboard.index(char) for char in word]
    sum = l[0]
    for i in range(1, len(l)): sum += abs(l[i - 1] - l[i])
    return sum
