impl Solution {
    pub fn count_matches(items: Vec<Vec<String>>, rule_key: String, rule_value: String) -> i32 {
        let mut key_to_search = 0;
        let mut sum = 0;

        if rule_key == "type" {
            key_to_search = 0;
        } else if rule_key == "color" {
            key_to_search = 1;
        } else {
            key_to_search = 2;
        }
        for item in items.iter() {
            if item[key_to_search as usize] == rule_value {
                sum += 1;
            }
        }
        sum
    }
}
