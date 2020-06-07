fun shuffle(nums: IntArray, n: Int): IntArray {
  var list = mutableListOf<Int>()
  val half = nums.size / 2
  for (i in 0..half - 1) {
      list.add(nums[i])
      list.add(nums[n + i])
  }
  return list.toIntArray()
}