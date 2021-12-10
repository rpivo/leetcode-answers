// implementation Solution
impl Solution {
    // public function count_matches takes an a vector of vectors of strings
    // called items, a string called rule_key, a string called rule_value, and
    // returns a 32-bit integer.
    pub fn count_matches(items: Vec<Vec<String>>, rule_key: String, rule_value: String) -> i32 {
        // as_ref is used to do a cheap reference-to-reference conversion.

        // This trait is similar to AsMut which is used for converting between
        // mutable references.

        // If you need to do a costly conversion it is better to implement
        // From with type &T or write a custom function.

        // I'm not really sure why the author chose to use as_ref() here.

        // It looks like it could also be possible to do &rule_key instead of
        // rule_key.as_ref().

        // maybe the reference is not even needed, and you could just use
        // rule_key itself?

        // in any case, we are setting immutable variable idx equal to the
        // result of a match statement.

        // if rule_key is equal to "color", then idx is 1.

        // if rule_key is equal to "name", then idx is 2.

        // else, idx is 0.
        let idx = match rule_key.as_ref() {
            "color" => 1,
            "name" => 2,
            _ => 0,
        };
        // convert items into an iterable.
        // then, perform a filter() on it.
        // for each vector v within items, check if v at index idx is equal to
        // rule_value.
        // if it is, keep vector v within the iterator.
        // once the filter is finished, return the count of the iterator as a
        // 32-bit integer.
        items.into_iter().filter(|v| v[idx] == rule_value).count() as i32
    }
}
