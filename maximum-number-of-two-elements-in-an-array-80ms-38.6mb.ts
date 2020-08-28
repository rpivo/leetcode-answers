// declare function maxProduct that takes in an array of numbers called nums and returns a number
function maxProduct(nums: number[]): number {
  // call sort on the nums array, and use the compare function as the function argument
  // this uses point-free style to get pass variables to the compare function
  nums.sort(compare)
  // create immutable variable a that's equal to the first item in array nums
  const a = nums[0]
  // create immutable variable b that's equal to the second item in array nums
  const b = nums[1]
  // create immutable variable c that's equal to the item in nums at index equal to the length of
  // nums minus 2
  const c = nums[nums.length - 2]
  // create immutable variable d that's equal to the item in nums at index equal to the length of 
  // nums minus 1
  const d = nums[nums.length - 1]
  // create immutable variable e that's equal to a minus 1 times b minus 1
  const e = (a - 1) * (b - 1)
  // create immutable variable f that's equal to c minus 1 times d minus 1
  const f = (c - 1) * (d - 1)
  // return the highest value between e and f
  return Math.max(e, f)
}

// declare function compare, that takes in a number called x, a number called y, and returns a 
// number
function compare(x: number, y: number): number {
  // if x is less than y, then return '- 1'
  // else if x is greater than y, return 1
  // else return 0 (no change)
  return (x < y) ? (-1) : ((x > y) ? 1 : 0)
}