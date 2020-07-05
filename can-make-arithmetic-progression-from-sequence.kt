class Solution {
  fun canMakeArithmeticProgression(arr: IntArray): Boolean {
  arr.sort()
    var difference = arr[1] - arr[0]
    for (i in 2..arr.size - 1) {
      if ((arr[i] - arr[i - 1]) != difference) return false
    }
    return true
  }
}