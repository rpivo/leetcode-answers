class Solution {
  fun anagramMappings(A: IntArray, B: IntArray): IntArray {
    var list = mutableListOf<Int>()
    A.forEach { list.add(B.indexOf(it)) }
    return list.toIntArray()
  }
}