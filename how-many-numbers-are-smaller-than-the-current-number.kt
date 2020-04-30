class Solution {
    fun smallerNumbersThanCurrent(nums: IntArray): IntArray {
        val numList: MutableList<Int> = mutableListOf()
        for (outerNumber in nums) {
          var smallerCount = 0
          for (innerNumber in nums) {
            if (innerNumber < outerNumber) smallerCount += 1
          }
          numList.add(smallerCount)
        }
        return numList.toIntArray()
    }
}