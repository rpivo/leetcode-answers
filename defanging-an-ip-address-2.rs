// define implementation Solution, which is kind of like rust's version of a 
// class
impl Solution {
    // define public function defang_i_paddr, which takes in argument address 
    // of type String, and returns type String
    pub fn defang_i_paddr(address: String) -> String {
        // defang_i_paddr implicitly returns the result of the below expression

        // a variety of String methods can be found here:
        // https://doc.rust-lang.org/std/string/struct.String.html

        // split takes address and returns a DoubleEndedIterator of strings
        // separated by the given character, in this case "."

        // a variety of DoubleEndedIterator methods can be found here:
        // https://doc.rust-lang.org/std/iter/trait.DoubleEndedIterator.html

        // enumerate returns the index and item of each element in a new 
        // iterator

        // inside the map(), there is a pair of pipes that encloses each item 
        // that is iterated through the enumerate(). This is the index i and 
        // its respective string s.

        // it looks as if the map generates a new iterator (which is contained 
        // in brackets.)

        // for each element mapped, add s, followed by a conditional value. If 
        // i is equal to 3, then add nothing, else add "[.]".

        // once the map is finished, join all the strings in the iterator, 
        // separated by nothing.

        // collect() takes the contents of an iterator and turns it into a 
        // collection.
        address
            .split(".")
            .enumerate()
            .map(|(i, s)| [s, if i == 3 { "" } else { "[.]" }].join(""))
            .collect()
    }
}
