// define implementation Solution
impl Solution {
  // define public function build_array, which takes in a mutable variable
  // nums, which is a Vector of 32-bit integers, and returns a vector of
  // 32-bit integers.
  pub fn build_array(mut nums: Vec<i32>) -> Vec<i32> {
    // create immutable variable OFFSET, which is an unsigned 32-bit integer, and set it
    // equal to 10.
    const OFFSET: u32 = 10;
    
    // create mutable variable n and set it equal to the length of nums
    let n = nums.len();

    // loop from 0 to n
    for i in 0..n {
      // create mutable variable t, and set it equal to the value of nums at 
      // the value of nums at index i cast as a usize. The index must be of 
      // type usize, so we need to cast to usize.

      // & operator is used to get the bitwise AND of the value at index equal 
      // to the value of nums at index i and the binary number 0b001111111111
      let t = nums[nums[i] as usize] & 0b001111111111;
      // bitwise or and assignment

      // take t left-shifted by OFFSET.take the OR of the value of nums at 
      // index i and store it in the value of nums at index i.
      nums[i] |= t << OFFSET; 
    }

    // loop from 0 to n
    for i in 0..n {
      // set the value of nums at index i to the value of nums at index i right-shifted by OFFSET.
      nums[i] >>= OFFSET;
    }

    // return nums (?)
    nums
  }
}