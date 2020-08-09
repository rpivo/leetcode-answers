// declare function balancedStringSplit that takes in a string called s and returns a number
function balancedStringSplit(s: string): number {
  // create mutable variable that's a number called count
  let count = 0;
  // create mutable variable that's a number called numR
  let numR = 0;
  // create mutable variable that's a number called numL
  let numL = 0;
  // loop through the length of s
  for (let i = 0; i <s.length; i++) {
    // if the character of s at index i is 'L', increment numL
    if (s[i] === 'L') numL++;
    // if the character of s at index i is 'R', increment numR
    if (s[i] === 'R') numR++;
    // if the count of numL is equal to the count of numR
    if (numL === numR) {
      // increment count
      count++;
      // set numL equal to 0
      numL = 0;
      // set numR equal to 0
      numR = 0;
    }
  }
  return count;
}