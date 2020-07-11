class Solution {
  fun oddCells(n: Int, m: Int, indices: Array<IntArray>): Int {
    var count = 0
    // create immutable Array that contains n number of MutableLists, each of which contain m number of 0s
    val arr = Array(n) { MutableList(m) { 0 } }
    for (i in 0..indices.size - 1) {
      val (x, y) = indices[i]
      for (i in 0..arr[x].size - 1) arr[x][i] = arr[x][i] + 1
      arr.forEach { i -> i[y] += 1 }
    }
    arr.forEach {
      row -> row.forEach {
        column -> if (column.rem(2) != 0) count++
      }
    }
    return count
  }
}