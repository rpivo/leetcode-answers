// declare function largestAltitude, which takes in an array of numbers called gain, and returns a 
// number
function largestAltitude(gain: number[]): number {
  // create mutable variable called highestAlt and set it equal to 0
  let highestAlt = 0;
  // create mutable variable called currentAlt and set it equal to 0
  let currentAlt = 0;
  // loop from 0 to the length of gain
  for (let i = 0; i < gain.length; i++) {
    // set currentAlt equal to currentAlt plus the value of gain at index i
    currentAlt += gain[i];
    // if currentAlt is greater than highestAlt
    if (currentAlt > highestAlt) {
      // set highestAlt equal to currentAlt
      highestAlt = currentAlt;
    }
  }
  return highestAlt;
}