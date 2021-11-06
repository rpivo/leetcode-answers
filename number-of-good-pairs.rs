impl Solution {
    pub fn num_identical_pairs(nums: Vec<i32>) -> i32 {
        let mut sum = 0;
        let mut curr = 0;

        for n in 0..nums.len() {
            curr = nums[n];

            for o in n + 1..nums.len() {
                if nums[o] == curr {
                    sum += 1;
                }
            }
        }
        return sum;
    }
}
