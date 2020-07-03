import kotlin.math.floor

class Solution {
    fun highFive(items: Array<IntArray>): Array<IntArray> {
    val map = mutableMapOf<Int, MutableList<Int>>()
    for (i in 0..items.size - 1) {
      val (id, score) = items[i]
      map.getOrPut(id, ::mutableListOf).add(score)
    }
    val list = mutableListOf<IntArray>()
	  map.forEach {
      it.value.sort()
      var highest = it.value.takeLast(5)
      list.add(intArrayOf(it.key, floor(highest.average()).toInt()))
    }
    return list.toTypedArray()
  }
}