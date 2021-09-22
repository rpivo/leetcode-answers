// define implementation Solution
impl Solution {
  // define public function get_concatenation, which takes in a mutable vector 
  // of 32-bit integers called nums, and returns a 32-bit integer vector.
  pub fn get_concatenation(mut nums: Vec<i32>) -> Vec<i32> {
      // extend nums with a clone of nums
      nums.extend(nums.clone());
      // return nums
      nums
  }
}