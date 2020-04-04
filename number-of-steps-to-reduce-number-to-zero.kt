class Solution {
    fun numberOfSteps (num: Int): Int {
        var count = 0
        var ref = num
        while (ref > 0) {
          if (ref % 2 == 0) {
           ref = ref / 2 
          } else {
            ref = ref - 1
          }
          count += 1
        }
        return count
    }
}