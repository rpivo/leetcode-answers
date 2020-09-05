// declare function sumZero that takes in a number, and returns an array of numbers
function sumZero(n: number): number[] {
  // if n equals to, return an array containing -1 and 1, which adds to 0
  if (n === 2) return [-1, 1]
  // create an immutable variable called out that's an array of numbers and set it equal to an 
  // empty array
  const out: number[] = []
  // create mutable variable sum and initialize as 0
  let sum = 0
  // loop from 0 to n minus 2
  for (let i = 0; i < n - 1; i++) {
    // push the value of i to out
    out.push(i)
    // set sum equal to sum plus i
    sum += i
  }
  // rather than pushing a negative value to out on every pass, just push -sum, which will balance
  // out with the positives
  out.push(-sum)
  return out
}