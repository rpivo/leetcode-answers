// new class
class Solution {
  /* local function decompressRLElist takes in IntArray nums and returns Intarray */
  fun decompressRLElist(nums: IntArray): IntArray {
    /* returns the result of solve(nums) */
    return solve(nums)
  }
  /* private function is only visible within the containing scope */
  /* tailrec function is a tail-recursive function. this means thiat it's a function
  that performs recursion as its final action. */
  /* function solve takes in an IntArray nums and an Intarray result that's initialized
  as Intarray(0), and returns an IntArray */
  private tailrec fun solve(nums: IntArray, result: IntArray = IntArray(0)): IntArray =
    /* Kotlin when is equivalent to javascript switch */ 
    when {
      /* isEmpty() returns true if the array is empty */
      /* if nums.isEmpty() is true, return result */
      nums.isEmpty() -> result
      /* tail recursion - recursively call solve() here */
      /* first argument to solve() is the result of nums.copyOfRange(2, nums.size) */
      /* copyOfRange returns a new array that is a copy of the specified range of the original array */
      /* copyOfRange makes a new array from index 2 of the nums array all the way to the end of the array */
      /* second argument to solve() is the result of result.plus(generateList(nums[0], nums[1])) */
      /* result is first initialized as an empty IntArray */
      /* plus() returns array containing all of the original array plus all additional elements given */
      /* solve() here skips the first two items of the nums array */
      /* result.plus() takes care of the first two items in the given nums array */
      else -> solve(nums.copyOfRange(2, nums.size), result.plus(generateList(nums[0], nums[1])))
    }
  /* private function generateList takes in Integer count and Integer value and returns an IntArray */
  /* the generated IntArray is initialized with count number of items. each item is equal to value */
  private fun generateList(count: Int, value: Int): IntArray = IntArray(count) { value }
}