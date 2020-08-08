// declare function createTargetArray, that takes in an array of numbers called nums, an array of
// numbers called index, and returns an array of numbers
function createTargetArray(nums: number[], index: number[]): number[] {
  // create mutable array of numbers called res and initialize it as empty
  let res: Array<number> = [];
  // loop through the length of nums
  for (let i = 0; i < nums.length; i++) {
    // creates an array that contains nums[i] and index[i], and then pulls them off (???) and names them num and idx
    const [num, idx]: number[] = [nums[i], index[i]];
    // if idx is equal to the current length of res
    if (idx === res.length) {
      // push num to the end of res
      res.push(num);
    } else {
      // else, insert num at index idx, and deleting 0 items in the process
      res.splice(idx, 0, num);
    }
  }
  return res;
}