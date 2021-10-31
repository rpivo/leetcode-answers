// implement Solution
impl Solution {
    // public function maximum_wealth, which takes in a vector of vectors of 
    // i32 integers, and returns an i32 integer.
    pub fn maximum_wealth(accounts: Vec<Vec<i32>>) -> i32 {
        // declare mutable variable result, which is currently equal to 0.
        let mut result = 0;
        // for vector i in the range of 0 inclusive to the length of accounts 
        // exclusive
        for i in 0..accounts.len() {
            // declare mutable variable currentVal, which is currently equal
            // to 0
            let mut currentVal = 0;
            // for i32 integer j in the range of 0 inclusive to the length of 
            // vector i exclusive
            for j in 0..accounts[i].len() {
                // increment the value of currentValue by the value of 
                // accounts it vector i at index j.
                currentVal += accounts[i][j];
                // if currentVal is greater than result
                if currentVal > result {
                    // set result equal to currentVal
                    result = currentVal;
                }
            }
        }
        // return result
        result
    }
}
