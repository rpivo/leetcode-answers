// declare function shuffle that takes in an array of numbers called nums and a number called n, 
// and returns an array of numbers
function shuffle(nums: number[], n: number): number[] {
  // declare mutable variable i and initialize to 0
  let i = 0
  // declare mutable variable j and initialize to n
  let j = n
  // declare immutable variable re as an array of numbers, and set it equal to a new array of 
  // length 2 times n
  const re: number[] = new Array(2 * n)
  // while i is less than n
  while (i < n) {
    // set the value of re at index 2 times i equal to the value of nums at i
    re[2 * i] = nums[i]
    // set the value of re at index 2 times i plus 1 equal to the value of nums at index j
    re[2 * i + 1] = nums[j]
    // increment i
    ++i
    // increment j
    ++j
  }
  return re
}