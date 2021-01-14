// declare function halvesAreAlike, which takes in a string called s, and returns a boolean
function halvesAreAlike(s: string): boolean {
  // create immutable variable firstHalf and set it equal to string s sliced from the first 
  // character to the halfway point of the string
  const firstHalf = s.slice(0, s.length / 2)
  // create immutable variable secondHalf and set it equal to string s sliced from the halfway 
  // point of the string
  const secondHalf = s.slice(s.length / 2)
  // create mutable variable firstVowels and set it equal to an array that includes all the 
  // matches in firstHalf where the letter is a vowel, taking into account both uppercase and 
  // lowercase characters
  let firstVowels = firstHalf.match(/[aeiou]/gi)
  // if no matches were found
  if (!firstVowels) {
    // set firstVowels to an empty array
    firstVowels = []
  }
  // create mutable variable secondVowels and set it equal to an array that includes all the 
  // matches in secondHalf where the letter is a vowel, taking into account both uppercase and 
  // lowercase characters
  let secondVowels = secondHalf.match(/[aeiou]/gi)
  // if no matches were found
  if (!secondVowels) {
    // set secondVowels to an empty array
    secondVowels = []
  }
  // return the result of checking equality between the length of firstVowels against the length 
  // of secondVowels
  return (firstVowels.length === secondVowels.length)
}