fun createTargetArray(nums: IntArray, index: IntArray): IntArray {
  var list = mutableListOf<Int>()
  for (i in 0..nums.size - 1) list.add(index[i], nums[i])
  return list.toIntArray()
}