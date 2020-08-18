// declare function countGoodTriplets that takes in an array of numbers called arr, a number 
// called a, a number called b, and a number called c, and returns a number
function countGoodTriplets(arr: number[], a: number, b: number, c: number): number {
  // create new variable n and set it equal to the length of arr
  let n = arr.length;
  // create new return value variable and set it equal to 0
  let ret = 0;
  // loop through the length of arr
  for (let i = 0; i < n; i++) {
    // loop through the length of arr starting at i plus one
    for (let j = i + 1; j < n; j++) {
      // if the absolute value of arr at index i minus arr at index j is less than or equal to a
      if (Math.abs(arr[i] - arr[j]) <= a) {
        // loop through the length of n starting at j plus 1
        for (let k = j + 1; k < n; k++) {
          // if the absolute value of arr at index j minues arr at index k is less than or equal 
          // to b, and the absolute value arr at index i minues arr at index k is less than or 
          // equal to c, increment return value ret
          if (
            Math.abs(arr[j] - arr[k]) <= b &&
            Math.abs(arr[i] - arr[k]) <= c
          ) ret++;
        }
      }
    }
  }
  return ret;
}