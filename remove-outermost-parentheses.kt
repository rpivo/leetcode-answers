class Solution {
  fun removeOuterParentheses(S: String): String {
    var leftCount = 0
    var rightCount = 0
    var removalCount = 0
    var leftIndex = 0
    val builder = StringBuilder(S)
    for (i in 0 until S.length) {
      if (S[i] == '(') {
        leftCount++
        if (leftCount == 1) leftIndex = i
      } else if (S[i] == ')') {
        rightCount++
        if (leftCount == rightCount) {
          builder.deleteCharAt(i - removalCount)
          builder.deleteCharAt(leftIndex - removalCount)
          leftCount = 0
          rightCount = 0
          removalCount += 2
        }
      }
    }
    return builder.toString()
  }
}