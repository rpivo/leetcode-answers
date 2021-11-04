impl Solution {
    pub fn shuffle(nums: Vec<i32>, n: i32) -> Vec<i32> {
        let frontSlice = &nums[0..n as usize];
        let backSlice = &nums[n as usize..nums.len() as usize];

        let mut v = vec![];

        for l in 0..n {
            v.push(frontSlice[l as usize]);
            v.push(backSlice[l as usize]);
        }

        return v;
    }
}
