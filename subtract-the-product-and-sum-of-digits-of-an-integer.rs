impl Solution {
    pub fn subtract_product_and_sum(n: i32) -> i32 {
        let str = n.to_string();
        let mut v: Vec<i32> = vec![];
        let mut product = 1;
        let mut sum = 0;
        for c in str.chars() {
            v.push(c.to_digit(10).unwrap() as i32);
        }
        for n in v {
            product *= n;
            sum += n;
        }
        return product - sum;
    }
}
