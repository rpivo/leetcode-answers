// implementation Solution
impl Solution {
    // public function decompress_rl_elist takes in a vector of 32-bit
    // integers called nums, and returns a vector of 32-bit integers.
    pub fn decompress_rl_elist(nums: Vec<i32>) -> Vec<i32> {
        // the vector method chunks() returns an iterator where each item in
        // the iterator has length n, n being the argument passed in to
        // chunks().
        nums.chunks(2)
            // we then map through this new iterator of chunks.
            // for each item c, we create a vector containing item c[1] c[0] times.
            .map(|c| vec![c[1]; c[0] as usize])
            // we then flatten this vector of vectors into a single list.
            .flatten()
            // and then collect the results into a new vector.
            .collect()
    }
}
