impl Solution {
    pub fn balanced_string_split(s: String) -> i32 {
        let chars = s.chars();
        let mut balance = 0;
        let mut sum = 0;
        for c in chars {
            if c == 'L' {
                balance -= 1;
            } else {
                balance += 1;
            }
            if balance == 0 {
                sum += 1
            }
        }
        sum
    }
}
