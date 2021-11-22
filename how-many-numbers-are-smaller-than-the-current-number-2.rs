// implementation Solution
impl Solution {
    // public function smaller_numbers_than_current takes in a vector of
    // 32-bit integers called nums, and returns a vector of 32-bit integers.
    pub fn smaller_numbers_than_current(nums: Vec<i32>) -> Vec<i32> {
        // here, 0i32 is declaring the number 0 as a 32-bit integer.
        // the "102" is saying that this initialized vector contains 102
        // items, each of which are a 32-bit integer value set to 0.
        let mut cnts = vec![0i32; 102];
        // set mutable variable res equal to a new vector.
        // this vector is filled with 32-bit integers set to 0, and is the
        // length of nums.
        let mut res = vec![0i32; nums.len()];
        // for each num in nums
        for &num in &nums {
            // cast num as a usize so that it can be used as an index.
            // set the value of cnts at index num plus 1 equal to the value of
            // cnts at index num plus 1, plus 1.
            cnts[num as usize + 1] += 1;
        }
        // loop from 1 to 102.
        for i in 1..102 {
            // set the value of cnts at index i equal to the value of cnts at
            // index i, plus the value of cnts at index i minus 1.
            cnts[i] += cnts[i - 1];
        }
        // loop through nums and pull off both the index and the item during
        // the loop.
        for (i, &x) in nums.iter().enumerate() {
            // set the value of res at index i equal to the value of cnts at
            // index x, casting x as a usize so that it can be used as an
            // index.
            res[i] = cnts[x as usize];
        }
        // return res.
        res
    }
}
