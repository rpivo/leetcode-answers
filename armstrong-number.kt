import kotlin.math.pow

class Solution {
  fun isArmstrong(N: Int): Boolean {
    var num = N
    var sum = 0
    val mutableList = mutableListOf<Int>()
    while (num > 0) {
      mutableList.add(num % 10)
      num /= 10
    }
    mutableList.forEach {
      sum += it.toDouble().pow(mutableList.size).toInt()
    }
    return sum == N
  }
}