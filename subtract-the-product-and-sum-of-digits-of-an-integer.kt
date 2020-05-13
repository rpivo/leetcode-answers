class Solution {
  fun subtractProductAndSum(n: Int): Int {
    val string = n.toString()
    val numbers = string.map { it.toString().toInt() }
    val product = numbers.reduce { acc, it ->  acc * it }
    val sum = numbers.reduce { acc, it ->  acc + it }
    return product - sum
  }
}