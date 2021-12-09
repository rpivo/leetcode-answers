// implementation Solution
impl Solution {
    // public function interpret takes in a String called command and returns
    // a String.
    pub fn interpret(command: String) -> String {
        // set immutable variable chars equal to a vector of chars collected
        // from the characters contained within String command.
        let chars = command.chars().collect::<Vec<char>>();
        // peekable() returns an iterator with a peek() function that returns
        // an optional reference to the next element.

        // This struct is created by the peekable method on Iterator.

        // peek() returns a reference to the next() value without advancing the
        // iterator.

        // Like next, if there is a value, it is wrapped in a Some(T).

        // But if the iteration is over, None is returned.

        // Because peek() returns a reference, and many iterators iterate over
        // references, there can be a possibly confusing situation where the
        // return value is a double reference.

        // So, it looks like peekable() returns a regular iterator like iter(),
        // except that it also has a peek() function, which allows us to look
        // at the next() element in the iterator without advancing the
        // iterator.
        let mut chars = chars.iter().peekable();
        // set mutable variable ret equal to a new String.

        // new() creates a new empty String.

        // Given that the String is empty, this will not allocate any initial buffer.

        // While that means that this initial operation is very inexpensive,
        // it may cause excessive allocation later when you add data.

        // If you have an idea of how much data the String will hold, consider
        // the with_capacity() method to prevent excessive re-allocation.
        let mut ret = String::new();
        // while the length of chars is greater than 0...
        while chars.len() > 0 {
            // rust provides pattern matching via the match keyword, which can
            // be used like a C switch.

            // The first matching arm is evaluated and all possible values
            // must be covered.

            // next() advances the iterator and returns the next value.

            // returns None when iteration is finished.
            match chars.next() {
                // None and Some are variants of the Option enum.

                // because next returns an Option, we can use Some(char) to
                // check whether this option contains the char.

                // if the next value is char 'G'...

                // You can append a char to a String with the push method,
                // and append a &str with the push_str method.

                // ret.push('G') would also work here.
                Some('G') => ret.push_str("G"),
                // if the next value is char '('...
                // perform another match, but this time peek the next value in
                // chars and check that value against different conditions.
                Some('(') => match chars.peek() {
                    // if the peeked value is char ')'...
                    Some(')') => {
                        // push the string "o" to ret.
                        ret.push_str("o");
                        // consume the next value in chars

                        // This is the previously peeked value.
                        let _ = chars.next();
                    }
                    // if no match is found...
                    _ => {
                        // push the string "al" to ret.
                        ret.push_str("al");
                        // consume the next three values in chars.
                        let _ = chars.next();
                        let _ = chars.next();
                        let _ = chars.next();
                    }
                },
                // if no match is found...

                // panic!() panics the current thread.

                // This allows a program to terminate immediately and provide
                // feedback to the caller of the program.

                // panic! should be used when a program reaches an
                // urecoveragble state.

                // This macro is the perfect way to assert conditions in
                // example code and in tests.

                // panic! is closely tied with the unwrap method of both Option
                // and Result enums.

                // Both implementations call panic! when they are set to None
                // or Err variants.

                // When using panic!(), you can specify a string payload, that
                // is built usihng the format! syntax.

                // That payload is used when injecting the panic into the
                // calling Rust thread, causing the thread to panic entirely.

                // The behavior of the default std hook, i.e. the code that
                // runs directly after the panic is invoked, is to print the
                // message payload to stderrr along with the file/line/column
                // information of the panic!() call.

                // You can override the panic hook using
                // std::panic::set_hook().

                // Inside the hook a panic can be accessed as a
                // &dyn Any + Send, which contains either a &str or String for
                // regular panic!() invocations.

                // To panic with a value of another type, panic_any can be
                // used.

                // Result enum is often a better solution for recovering from
                // errors than using the panic! macro.

                // This macro should be used to avoid proceeding using
                // incorrect values, such as from external sources.
                _ => panic!("leetcode lied"),
            }
        }
        ret
    }
}
