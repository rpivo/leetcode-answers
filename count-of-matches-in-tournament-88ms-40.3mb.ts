// declare function numberOfMatches, which takes in a number called n, and returns a number
function numberOfMatches(n: number): number {
  // declare mutable variable numberOfMatches and set it equal to 0
  let numberOfMatches = 0
  // while n is not equal to 1
  while (n !== 1) {
    // if n divided by 2 leaves no remainder (and therefore it's an even number)
    if (n % 2 === 0) {
      // set numberOfMatches equal to numberOfMatches plus n divided by 2
      numberOfMatches += n / 2
      // set n equal to n divided by 2
      n = n / 2
    // else, if the number is an odd number
    } else {
      // set numberOfMatches equal to numberOf Matches plus (n minus 1) divided by 2
      numberOfMatches += (n - 1) / 2
      // set n equal to ((n minus 1) divided by 2) plus 1
      n = ((n - 1) / 2) + 1
    }
  }
  return numberOfMatches
}
