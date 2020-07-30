// declare function numIdenticalPairs that takes in an array of numbers called nums,
// and returns a number
function numIdenticalPairs(nums: number[]): number {
  // create a new Map called map
  // Maps are similar to Objects, but have special methods for setting and getting key:value
  // pairs. Maps can be more performant for this use case.
  var map = new Map();
  // create variable counter and initialize it to 0.
  var counter = 0;
  // for each number in nums
  nums.forEach((x) => {
    // if map has a key of x
    if (map.has(x) === true) {
      // add the value of x in map to counter
      counter += map.get(x);
      // set map at key x to value of x + 1
      map.set(x, map.get(x) + 1);
    } else {
      // if map does not have key x, set map at key x to 1
      map.set(x, 1);
    }
  });
  return counter;
}