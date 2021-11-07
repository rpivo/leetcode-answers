impl Solution {
    pub fn num_jewels_in_stones(jewels: String, stones: String) -> i32 {
        let j: Vec<char> = jewels.chars().collect();
        let v: Vec<char> = stones.chars().collect();
        let mut c = 0;

        for n in j {
            for o in &v {
                if n == *o {
                    c += 1;
                }
            }
        }

        return c;
    }
}
