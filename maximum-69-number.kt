class Solution {
  fun maximum69Number (num: Int): Int {
      var split = num.toString().trim().split("").filter { it.isNotBlank() }
      split = split.toMutableList()
      for (i in 0..split.size - 1) {
        if (split[i] == "6") {
          split[i] = "9"
          return split.joinToString(separator = "").toInt()
        }
      }
      return num
  }
}