impl Solution {
    pub fn kids_with_candies(candies: Vec<i32>, extra_candies: i32) -> Vec<bool> {
        let mut v: Vec<bool> = vec![];

        let max = candies.iter().max().unwrap();

        for n in 0..candies.len() {
            v.push(candies[n] + extra_candies >= *max);
        }

        return v;
    }
}
