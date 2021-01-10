// declare function countConsistentStrings, which takes in a string called allowed, an array of 
// strings called words, and returns a number
function countConsistentStrings(allowed: string, words: string[]): number {
  // create mutable variable passed and set it equal to the length of words
  let passed = words.length
  // loop through each word in words
  for (let word of words) {
    // loop through each letter in word
    for (let letter of word) {
      // if the index of letter letter in string allowed is less than 0
      if (allowed.indexOf(letter) < 0) {
        // decrement passed
        passed--
        // exit the outer scope loop
        break
      }
    }
  }
  return passed
}