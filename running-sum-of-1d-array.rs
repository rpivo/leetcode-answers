impl Solution {
    pub fn running_sum(nums: Vec<i32>) -> Vec<i32> {
        let mut prev: i32 = 0;
        let mut result = vec![];
        for num in nums.iter() {
            result.push(prev + num);
            prev = *num + prev;
        }
        return result;
    }
}
