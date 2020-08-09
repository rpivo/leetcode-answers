// declare function findNumbers that takes in an array of numbers called nums and returns a number
function findNumbers(nums: number[]): number {
  // create mutable variable called tot that's a number
  let tot = 0;
  // loop through the length of array nums
  for (let i = 0; i < nums.length; i++) {
    // create mutable variable that's a number called r
    let r = 0;
    // while the item in nums at index i is greater than or equal to 1
    while (nums[i] >= 1) {
      // remove a digit from the item in nums at index i
      nums[i] = nums[i] / 10;
      // increment r, representing the number of digits that the item in nums at index i has
      r += 1;
    }
    // if the remainder of r divided by 2 is 0, meaning r is an even number, increment tot
    if (r % 2 === 0) tot += 1;
  }
  return tot;
}