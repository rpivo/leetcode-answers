impl Solution {
    pub fn maximum_wealth(accounts: Vec<Vec<i32>>) -> i32 {
        let mut sums = vec![];

        for v in accounts.iter() {
            let mut sum = 0;

            for i in v.iter() {
                sum += i;
            }

            sums.push(sum);
        }

        let max = sums.into_iter().max().unwrap();
        return max;
    }
}
