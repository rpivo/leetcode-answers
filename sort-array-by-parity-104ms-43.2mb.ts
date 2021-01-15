// declare function sortArrayByParity, which takes in an array of numbers called A, and returns an 
// array of numbers
function sortArrayByParity(A: number[]): number[] {
  // return an array
  return [
    // destructure the result of filtering even values from A
    ...A.filter(a => a % 2 === 0),
    // destructure the result of filtering odd values from A
    ...A.filter(a => a % 2 === 1)
  ]
}
