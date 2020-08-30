// declare function maximum69number that takes in a number called num and returns a number
function maximum69Number(num: number): number {
  // create immutable variable called digitsArr and set it equal to num stringified and split up 
  // by char (converted to array)
  const digitsArr = `${num}`.split('') 
  // loop from 0 to the length of digitsArr
  for (let i = 0; i < digitsArr.length; i++) {
    // if the value of digitsArr at index i is equal to '6'
    if (digitsArr[i] === '6') {
      // set the value of digitsArr at index i equal to '9'
      digitsArr[i] = '9'
      // break out of the loop
      break
    }
    // return digitsArr joined into a contiguous string and then converted into a number
  }
  return Number(digitsArr.join(''))
}