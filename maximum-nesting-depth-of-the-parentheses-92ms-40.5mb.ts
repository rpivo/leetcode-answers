// declare function maxDepth, that takes in a string called s and returns a number
function maxDepth(s: string): number {
  // create immutable variable called stack that's an array of strings, and initialize it as empty
  const stack: string[] = []
  // create mutable variable called max and initialize as 0
  let max = 0
  // create mutable variable called cur and initialize as 0
  let cur = 0
  // loop from 0 to the length of s
  for (let i = 0; i < s.length; i++) {
    // if the character in s at index i is (
    if (s[i] === '(') {
      // push the character on to stack
      stack.push(s[i])
      // increment cur
      cur++
      // set max equal to the maximum value of either max or cur
      max = Math.max(max, cur)
    // else if the value in s at index i is equal to )
    } else if (s[i] === ')') {
      // decrement cur
      cur--
    }
    // set max equal to the maximum value of eitehr max or cur
    max = Math.max(max, cur)
  }
  return max
}