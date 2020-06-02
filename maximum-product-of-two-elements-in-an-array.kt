fun maxProduct(nums: IntArray): Int {
  var list = nums.toMutableList()
  val first = list.removeAt(list.indexOf(list.max()))
  val second = list.removeAt(list.indexOf(list.max()))
  return (first - 1) * (second - 1)
}