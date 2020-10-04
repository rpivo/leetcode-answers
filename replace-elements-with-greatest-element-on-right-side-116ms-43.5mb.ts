// declare function replaceElements that takes in an array of numbers called arr and returns an 
// array of numbers
function replaceElements(arr: number[]): number[] {
  // create mutable variable max and set it equal to the value of arr at index length of arr minus
  // 1.
  let max = arr[arr.length - 1];
  // loop from the length of arr minus 2 down to 0
  for (let i = arr.length - 2; i >= 0; i--) {
    // create mutable variable v and set it equal to the value of arr at index i
    let v = arr[i];
    // set the value of arr at index i equal to max
    arr[i] = max;
    // use Math.max to get the max value between v and max. set this value on max.
    max = Math.max(v, max);
  }
  // set the last item in arr equal to -1
  arr[arr.length - 1] = -1;
  return arr;
}