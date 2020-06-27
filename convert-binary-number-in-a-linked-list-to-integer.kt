class Solution {
  var list = mutableListOf<Int>()
  fun getDecimalValue(head: ListNode?): Int {
    list.add(head!!.`val`)
    if (head.next != null) getDecimalValue(head.next)
    return list.joinToString(separator = "").toInt(radix = 2)
  }
}