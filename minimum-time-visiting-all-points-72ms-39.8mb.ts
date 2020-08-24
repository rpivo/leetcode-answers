// declare function minTimeToVisitAllPoints that takes in an array of arrays of numbers, and 
// returns a number
function minTimeToVisitAllPoints(points: number[][]): number {
  // create mutable variable result and initialize as 0
  let result = 0;
  // create mutable copy of the first array in points
  let current = points[0];
  // loop from 1 to the length of points
  for (let i = 1; i < points.length; i++) {
    // create immutable copy of points at array i
    const destination = points[i];
    // create immutable variable distX and set equal to the absolute value of the x coordinate of
    // destination minus the x coordinate of current
    const distX = Math.abs(destination[0] - current[0]);
    // create immutable variable distY and set equal to the absolute value of the y coordinate of 
    // destination minus the y coordinate of current
    const distY = Math.abs(destination[1] - current[1]);
    // set result equal to result plus the minimum value between distX and distY plus the absolute 
    // value of distX minus distY
    result += Math.min(distX, distY) + Math.abs(distX - distY);
    // set current to points at array i
    current = points[i];
  }
  return result;
}