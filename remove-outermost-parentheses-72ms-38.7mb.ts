// declare function removeOuterParentheses that takes in a string S, and returns a string
function removeOuterParentheses(S: string): string {
  // create mutable variable called level and initialize to 0
  let level = 0
  // create mutable variable result and initialize to an empty string
  let result = ''
  // loop from 0 to the length of S minus 1
  for (let i = 0; i < S.length; i++) {
    // create immutable variable c and set it to the value of S at index i
    const c = S[i]
    // if the value of c is ')'
    if (c === ')') {
      // decrement level
      level--
    }
    // if level is greater than 0
    if (level > 0) {
      // append the value of c to result
      result += c
    }
    // if the value of c is '('
    if (c === '(') {
      // increment level
      level++
    }
  }
  return result
}