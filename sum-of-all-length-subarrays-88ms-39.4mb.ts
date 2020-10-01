// declare function sumOddLengthSubarrays that takes an argument called arr that's an array of 
// numbers, and returns a number
function sumOddLengthSubarrays(arr: number[]): number {
  // create mutable variable res that's a number and set it to 0
  let res: number = 0
  // create immutable variable n that's a number and set it to the length of arr
  const n: number = arr.length
  // loop from 0 to n minus 1
  for (let i = 0; i < n; i++) {
    // create mutable variable sum and set it equal to the value of arr at index i
    let sum: number = arr[i]
    // create mutable variable cnt and set it equal to 1
    let cnt: number = 1
    // set res equal to res plus sum
    res += sum
    // loop from i plus 1 to n minus 1
    for (let j = i + 1; j < n; j++) {
      // increment cnt
      cnt++
      // set sum equal to sum plus the value of arr at index j
      sum += arr[j]
      // if cnt modulus 2 is equal to 1 (in other words, cnt is odd)
      if (cnt % 2 == 1) {
        // set res equal to res plus sum
        res += sum
      }
    }
  }
  return res
};