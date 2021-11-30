impl Solution {
    pub fn number_of_steps(num: i32) -> i32 {
        let mut n = num;
        let mut sum = 0;
        while n > 0 {
            if n % 2 == 0 {
                n /= 2;
            } else {
                n -= 1;
            }
            sum += 1;
        }
        sum
    }
}
