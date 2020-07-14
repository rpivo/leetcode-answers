class Solution {
  fun numIdenticalPairs(nums: IntArray): Int {
    var count = 0
    for (i in 0..nums.size - 1) {
      for (j in i..nums.size - 2) {
       if (nums[i] == nums[j + 1]) count++   
      }
    }
    return count
  }
}