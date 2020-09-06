// declare function generateTheString that takes in a number called n and returns a string
function generateTheString(n: number): string {
  // if n modulus 2 is not equal to 0
  if (n % 2 !== 0) {
    // call generateString with n and 'a' and return the result
    return generateString(n, 'a')
  }
  // call generateString with n minus 1 and '1' and add the result to the result from calling 
  // generateString with 1 and 'b'
  return generateString(n - 1, 'a') + generateString(1, 'b')
}
// declare function generateString that takes in a number called n and a string called a, and 
// returns a string
function generateString(n: number, a: string): string {
  // create mutable variable out that's an array of strings, and set it equal to a new array of 
  // size n filled with strings set to variable a
  let out: string[] = new Array(n).fill(a)
  // join the strings of out and return this value
  return out.join('')
}