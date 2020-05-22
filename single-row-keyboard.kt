import kotlin.math.abs

class Solution {
  fun calculateTime(keyboard: String, word: String): Int {
    var time = 0
    var previousIndex = 0
    for (i in 0..word.length - 1) {
      var index = keyboard.indexOf(word[i])
      time += Math.abs(index - previousIndex)
      previousIndex = index
    }
    return time
  }
}