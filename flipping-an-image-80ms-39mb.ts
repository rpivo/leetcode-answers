// declare function flipAndInvertImage that takes in an array of arrays of numbers called A, and 
// returns an array of arrays of numbers
function flipAndInvertImage(A: number[][]): number[][] {
  // loop through each array in A
  for (let r of A) {
    // reverse the array
    r.reverse()
    // loop from 0 to the length of r
    for (let i = 0; i < r.length; i++) {
      // set the value of r at index i equal to +!r[i], which is calculated like this:
      // get the value of r at index i -- r[i]
      // get the boolean opposite of this value -- !r[i]
      // convert this boolean opposite to a number -- +!r[i]
      r[i] = +!r[i]
    }
  }
  return A
}