impl Solution {
    pub fn decode(encoded: Vec<i32>, first: i32) -> Vec<i32> {
        let mut v = vec![first];
        for i in 0..encoded.len() {
            v.push(v[i] ^ encoded[i]);
        }
        v
    }
}
