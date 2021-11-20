impl Solution {
    pub fn smaller_numbers_than_current(nums: Vec<i32>) -> Vec<i32> {
        let mut v = vec![];
        for i in 0..nums.len() {
            let mut sum = 0;
            for j in 0..nums.len() {
                if nums[j] < nums[i] {
                    sum += 1;
                }
            }
            v.push(sum);
        }
        return v;
    }
}
