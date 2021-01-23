// declare function countGoodRectangles, which takes in an array of arrays of numbers, and returns 
// a number
function countGoodRectangles(rectangles: number[][]): number {
  // we're going to mutate the rectangles array and return something from it
  return rectangles
    // map through each item and get the minimum value between the two numbers in the item
    .map(rect => Math.min(rect[0], rect[1]))
    // reduce the array
    .reduce((accumulator, val) => {
      // if the item is greater than the value of accumulator.size (which will be 0 to start)
      if (val > accumulator.size) {
        // return a new object with the size property set to val, and the count property set to 1
        return { size: val, count: 1 }
      // else, if val is equal to the value of accumulator.size
      } else if (val === accumulator.size) {
        // increment accumulator.count
        accumulator.count++
      }
      return accumulator
    // initialize the accumulator as an object with two properties: size and count.
    // both properties are numbers initialized to 0.
    }, { size: 0, count: 0 })
    // return the final count value of the object that the array is reduced to
    .count
}
