impl Solution {
    pub fn restore_string(s: String, indices: Vec<i32>) -> String {
        let str_vec = s.split_terminator("").skip(1).collect::<Vec<&str>>();
        let mut sorted_str_vec = vec![];
        for i in 0..indices.len() {
            let i_in_indices = indices.iter().position(|&r| r == i as i32).unwrap();
            sorted_str_vec.push(str_vec[i_in_indices]);
        }
        return sorted_str_vec.join("");
    }
}
