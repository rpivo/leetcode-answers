// declare function busyStudent, that takes in an array of numbers called startTime, an array of 
// numbers called endTime, a number called queryTime, and returns a number
function busyStudent(startTime: number[], endTime: number[], queryTime: number): number {
  // create mutable variable smallerOrEqual and initialize as 0
  let smallerOrEqual = 0
  // loop through each item in startTime and call this item time (also make it mutable)
  for (let time of startTime) {
    // if the value of time is smaller or equal to the value of queryTime
    if (time <= queryTime) {
      // increment smallerOrEqual
      smallerOrEqual++
    }
  }
  // create mutable variable greaterOrEqual and initialize as equal to smallerOrEqual
  let greaterOrEqual = smallerOrEqual
  // loop through each item in endTime and call this item time (also make it mutable)
  for (let time of endTime) {
    // if the value of time is less than the value of queryTime
    if (time < queryTime) {
      // decrement greaterOrEqual
      greaterOrEqual--
    }
  }
  return greaterOrEqual
}