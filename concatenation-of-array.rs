impl Solution {
  pub fn get_concatenation(nums: Vec<i32>) -> Vec<i32> {
    let mut r = nums.clone();
    r.extend(nums);
    return r;
  }
}