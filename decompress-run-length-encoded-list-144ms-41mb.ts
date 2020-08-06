// declare function decompressRLElist, that takes in an array of numbers called nums, and returns 
// an array of numbers
function decompressRLElist(nums: number[]): number[] {
  // create immutable variable called res that's an array of numbers and initialize it as empty
  const res: number[] = [];
  // loop through all items in nums, stepping by 2
  for (let i = 0; i < nums.length; i += 2) {
    // pull off nums item at i and immutably store it as variable f
    const f = nums[i];
    // pull off nums item at i + 1 and immutably store it as variable val
    const val = nums[i + 1];
    // loop through the count of f
    for (let j = 0; j < f; j += 1) {
      // push val to res
      res.push(val);
    }
  }
  return res;
}