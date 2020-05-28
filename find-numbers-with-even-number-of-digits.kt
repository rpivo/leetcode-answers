fun findNumbers(nums: IntArray): Int {
  var count = 0
  for (num in nums) {
    var size = num.toString().trim().split("").filter { it.isNotBlank() }.size
    if (size % 2 == 0) count += 1
  }
  return count
}