class Solution {
    fun kidsWithCandies(candies: IntArray, extraCandies: Int): BooleanArray {
        val booleanList: MutableList<Boolean> = mutableListOf()
        val max = candies.max()!!
        for (candy in candies) {
          booleanList.add(candy + extraCandies >= max)
        }
        return booleanList.toBooleanArray()
    }
}