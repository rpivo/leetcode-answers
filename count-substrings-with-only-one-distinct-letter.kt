class Solution {
  fun countLetters(S: String): Int {
    var count = 0
    var sameCharLength = 0
    for (i in 0 until S.length) {
      if (i > 0 && S[i] != S[i - 1]) {
        count++
        sameCharLength = 1
      } else {
        sameCharLength++
        count += sameCharLength
      }
    }
    return count
  }
}