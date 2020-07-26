// declare variable runningSum that takes in an array of numbers called nums
// and returns an array of numbers
function runningSum(nums: number[]): number[] {
  // loop through all items in the nums array
  for (let i = 0; i < nums.length; i++) {
    // skip the first item in the nums array
    if (i === 0) continue;
    // set the current item equal to the previous item plus the current item
    nums[i] = nums[i - 1] + nums[i];
  }
  return nums;
}