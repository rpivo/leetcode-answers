class Solution {
  fun arraysIntersection(arr1: IntArray, arr2: IntArray, arr3: IntArray): List<Int> {
    val mutableList = mutableListOf<Int>()
    for (num in arr1) {
      if (arr2.contains(num) && arr3.contains(num)) {
        mutableList.add(num)
      }
    }
    return mutableList
  }
}