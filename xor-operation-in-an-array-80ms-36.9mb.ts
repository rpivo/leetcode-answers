// declare function xorOperation, that takes in a number called n, another number called start, 
// and returns a number
function xorOperation(n: number, start: number): number {
  // create mutable variable called number and set it equal to start
  let num: number = start;
  // loop through the count of n starting at 1
  for (let i: number = 1; i < n; i++) {
    // apply an xor operation on the current value of num and the value of start plus 2 times 
    // current count i
    num ^= start + 2 * i;
  }
  return num;
}