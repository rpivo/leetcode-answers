impl Solution {
    pub fn interpret(command: String) -> String {
        let command_vec: Vec<char> = command.chars().collect();
        let mut s_v: Vec<char> = vec![];
        let mut i = 0;
        while i < command_vec.len() {
            if command_vec[i] == 'G' {
                s_v.push('G');
                i += 1;
            } else if command_vec[i + 1] == ')' {
                s_v.push('o');
                i += 2;
            } else {
                s_v.extend(['a', 'l'].iter());
                i += 4;
            }
        }
        return s_v.into_iter().collect();
    }
}
