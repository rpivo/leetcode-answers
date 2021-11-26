impl Solution {
    pub fn decompress_rl_elist(nums: Vec<i32>) -> Vec<i32> {
        let mut v = vec![];
        for i in (0..nums.len()).step_by(2) {
            let freq = nums[i];
            for j in 0..freq {
                v.push(nums[i + 1]);
            }
        }
        v
    }
}
