// declcare function sortString that takes in a string called s and returns a string
function sortString(s: string): string {
  // create mutable variable counter that's an object with keys that are strings, and the value 
  // for each key is a number
  let counter: {[key: string]: number} = {}
  // create mutable variable called count that's a number equal to the length of s
  let count: number = s.length;
  // loop from 0 to the length of s
  for (let i = 0; i < s.length; i++) {
    // get the character in s at index i. use that character as the key lookup in counter. if the 
    // value at that key of counter is undefined, set the value of that key in counter to 0.
    if (counter[s[i]] === undefined) counter[s[i]] = 0
    // get the character in s at index i. use that character as the key lookup in counter. 
    // increment the value of that key in counter.
    counter[s[i]]++
  }
  // create mutable variable keys that's an array of strings and set it equal to the keys of 
  // counter sorted.
  let keys: string[] = Object.keys(counter).sort()
  // create mutable variable output that's an array of strings and initialize as empty.
  let output: string[] = []
  // while count is greater than 0
  while (count > 0) {
    // loop from 0 to the length of keys
    for (let i = 0; i < keys.length; i++) {
      // get the value of keys at index i and use that as the index for counter. if counter at 
      // that index is greater than 0.
      if (counter[keys[i]] > 0) {
        // push the value of keys at index i to array output
        output.push(keys[i])
        // decrement the value of counter at the value of keys at index i
        counter[keys[i]]--
        // decrement count
        count--
      }
    }
    // loop from the length of keys minus 1 down to 0
    for (let i = keys.length - 1; i >= 0; i--) {
      // get the value of keys at index i and use that as the index for counter. if counter at 
      // that index is greater than 0.
      if (counter[keys[i]] > 0) {
        // push the value of keys at index i to array output
        output.push(keys[i])
        // decrement the value of counter at the value of keys at index i
        counter[keys[i]]--
        // decrement count
        count--
      }
    }
  }
  // return array output joined as a single string
  return output.join('')
}