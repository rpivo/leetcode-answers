// function buildArray(nums: number[]): number[] {
//   let arr = []
//   for(let i = 0; i < nums.length; i++ ) {
//        arr.push(nums[nums[i]])
//   }
     
//      return arr
//  };

// define function buildArray, which takes in an array of numbers called nums, 
// and returns an array of numbers
function buildArray(nums: number[]): number[] {
  // create mutable array arr and set it as an empty array
  let arr = []
  // loop from 0 to the length of nums
  for (let i = 0; i < nums.length; i++) {
    // push the value of nums at index the value of nums at index i to arr
    arr.push(nums[nums[i]])
  }
  return arr
}