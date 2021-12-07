impl Solution {
    pub fn create_target_array(nums: Vec<i32>, index: Vec<i32>) -> Vec<i32> {
        let mut v = vec![];
        for n in 0..nums.len() {
            v.insert(index[n] as usize, nums[n]);
        }
        v
    }
}
