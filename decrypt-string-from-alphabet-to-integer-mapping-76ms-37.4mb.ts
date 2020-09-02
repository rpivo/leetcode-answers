// declare function freqAlphabets that takes in a string called s and returns a string
function freqAlphabets(s: string): string {
  // create mutable string variable called alph and set it equal to the alphabet with a single 
  // space in the front
  let alph: string = ' abcdefghijklmnopqrstuvwxyz'
  // create mutable array of strings called output and set it equal to an empty array
  let output: string[] = []
  // create mutable variable i and set it equal to the length of s minus 1
  let i = s.length - 1
  // while i is greater than -1
  while (i > -1) {
    // if the value of s at index i is a #
    if (s[i] === '#') {
      // add a new letter to the beginning of array output. This letter is equal to the parsed 
      // integer from the third to last character and the second to last character of s. Use this
      // parsed integer as the index to get the alphabet character from alph. Store this character
      // as the new letter at the beginning of output. 
      output.unshift(alph[parseInt(s.slice(i - 2, i))])
      // reduce counter i by 3
      i -= 3
    } else {
      // take the last integer character from s and parse it into an actual integer. Use this 
      // value as the index to get an alphabet character from alph. Add this alphabet character to
      // the beginning of array output.
      output.unshift(alph[parseInt(s[i])])
      // decrement i
      i -= 1
    }
  }
  // return array output joined as a single contiguous string
  return output.join('')
}