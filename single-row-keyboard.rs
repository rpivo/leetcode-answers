impl Solution {
    pub fn calculate_time(keyboard: String, word: String) -> i32 {
        let mut position = 0;
        let mut sum = 0;
        let mut char_vec: Vec<char> = word.chars().collect();
        let keyboard_vec: Vec<char> = keyboard.chars().collect();
        for c in char_vec {
            let i = keyboard_vec.iter().position(|&key| key == c).unwrap() as i32;
            sum += (position - i).abs();
            position = i;
        }
        sum
    }
}
