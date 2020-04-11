class Solution {
    fun numJewelsInStones(J: String, S: String): Int {
      var occurrences: Int = 0
      for (x in 0..J.length - 1) {
        for (y in 0..S.length - 1) {
          if (J[x] == S[y]) occurrences += 1
        }
      }
      return occurrences
    }
}