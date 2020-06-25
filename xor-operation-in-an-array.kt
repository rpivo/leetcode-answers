class Solution {
  fun xorOperation(n: Int, start: Int): Int {
    var list = mutableListOf<Int>()
    var result = 0
    for (i in 0..n - 1) list.add(start + (2 * i))
    list.forEach { result = result xor it }
    return result
  }
}