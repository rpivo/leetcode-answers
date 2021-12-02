// function targetIndices takes in an array of numbers called nums, a number
// called target, and returns an array of numbers.
function targetIndices(nums: number[], target: number): number[] {
  // sort nums in ascending order
  nums.sort((a, b) => a - b);
  // set mutable variable res equal to an empty string.
  var res = [];

  // loop from 0 to the length of nums
  for (var k = 0; k < nums.length; k++) {
    // if the value of nums at index k is equal to target, push k to res.
    if (nums[k] === target) res.push(k);
  }
  return res;
}
