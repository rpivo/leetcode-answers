impl Solution {
    pub fn target_indices(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut v = vec![];
        let mut nums_sorted = nums.clone();
        nums_sorted.sort();
        for (i, n) in nums_sorted.iter().enumerate() {
            if n == &target {
                v.push(i as i32);
            }
        }
        v
    }
}
