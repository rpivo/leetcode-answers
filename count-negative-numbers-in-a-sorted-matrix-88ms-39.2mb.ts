// declare function countNegatives that takes in an array of arrays of numbers called grid, and 
// returns a number
function countNegatives(grid: number[][]): number {
  // create mutable variable called res and initialize it as 0
  let res = 0
  // loop through each array in grid
  grid.forEach((g: number[]) => {
    // filter the item g and test each number to see if it's less than 0. count these filtered 
    // numbers and add them to res.
    res += g.filter((el: number) => el < 0).length
  })
  return res
}