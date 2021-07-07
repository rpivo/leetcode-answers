impl Solution {
    pub fn remove_vowels(s: String) -> String {
        return s
            .replace("a", "")
            .replace("e", "")
            .replace("i", "")
            .replace("o", "")
            .replace("u", "");
    }
}
