impl Solution {
    pub fn build_array(nums: Vec<i32>) -> Vec<i32> {
        let mut a = vec![];
        for n in 0..nums.len() {
            a.push(nums[nums[n] as usize])
        }
        return a;
    }
}
