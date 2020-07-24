class Solution {
  fun countNegatives(grid: Array<IntArray>): Int {
    var str = ""
    grid.forEach { row -> str += row.joinToString() }
    val map = str.filter{ it in "-"}
                 .groupingBy { it }
                 .eachCount()
    return map.getOrDefault('-', 0).toInt()
  }
}