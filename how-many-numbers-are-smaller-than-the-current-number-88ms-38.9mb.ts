// declare function smallerNumbersThanCurrent, that takes in an array of numbers called nums, and
// returns an array of numbers
function smallerNumbersThanCurrent(nums: number[]): number[] {
  // declare mutable variable map that is of type Record

  // the definition for Record from the TypeScript docs is this:
  // Record<Keys, Type>
  // Constructs a type with a set of properties Keys of type Type. This utility can be used to map
  // the properties of a type to another type.

  // Record can be a good way to add some predictability to an object of key:value pairs

  // in this case, we can expect map to be a collection of key:value pairs where the key is a
  // number and the value is also a number
  let map: Record<number, number> = {};
  // for each number in nums, perform a function
  nums.forEach(n => {
    // if map at key n does not yet exist, set map at key n to value 0
    if(!map[n]) map[n] = 0;
    // increment the value of map at key n
    map[n]++;
  });

  // create mutable number variable cumSum and initialize as 0.
  let cumSum: number = 0;
  // for each key k in map
  // map is automatically sorted at this point. not sure if this is a product of Records, a
  // product of JS objects, or a product of the number keys being coerced into strings, but this
  // seems to help since we do not have to do any sorting ourselves.
  for (let k in map) {
    // create temporary copy temp of cumSum
    // since cumSum will be updated in each pass, temp will hold a copy of the previous value of
    // cumSum
    let temp = cumSum;
    // set cumSum equal to cumSum plus map at key k
    cumSum += map[k];
    // set map at key k equal to temp.
    // Here, temp represents the number of previous numbers that exist where the current key is
    //larger than.
    map[k] = temp;
  }
  // return an array where we take each item in nums and use it as a key in map to get the value
  // of that key.
  return nums.map(n => map[n]);
}