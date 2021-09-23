impl Solution {
    pub fn final_value_after_operations(operations: Vec<String>) -> i32 {
        let joined = operations.join("");
        let decrements = joined.matches("--").count();
        let increments = joined.matches("++").count();
        return (increments - decrements) as i32;
    }
}
