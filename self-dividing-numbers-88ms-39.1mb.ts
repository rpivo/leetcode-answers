// declare function selfDividingNumbers that takes in a number called left, a number called right, 
// and returns an array of numbers
function selfDividingNumbers(left: number, right: number): number[] {
  // helper method to determine if self-dividing
  // declare function isSelfDividing that takes in a number called n, and returns a boolean
  function isSelfDividing(n: number): boolean {
    // create a reference to n (since we will be dividing n to get digits)
    // create immutable variable num and set it equal to n
    const num = n
    // while n is greater than 0
    while (n > 0) {
      // check if num isn't divisible by right-most digit
      // if num modulus n modulus 10 is not equal to 0, return false
      if (num % (n % 10) !== 0) return false
      // integer divide by 10 to get next digit
      // set n equal to the floor integer of n divided by 10
      n = Math.floor(n / 10)
    }
    // no problems, must be true
    return true
  }
  // to hold self-dividing numbers
  // create mutable variable called res that's an array of numbers and initialize as empty
  let res: number[] = []
  //go from left to right (inclusive)
  // loop from the value of left to the value of right
  for (let i = left; i <= right; i++) {
    // if self-dividing, add to res
    // if the result of isSelfDividing with argument i returns true, push i to res
    if (isSelfDividing(i)) res.push(i)
  }
  return res
}