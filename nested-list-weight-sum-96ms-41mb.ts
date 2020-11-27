// declare function depthSum, which takes in a variable called nestedList that is of type 
// NestedInteger[], and returns a number
function depthSum(nestedList: NestedInteger[]): number {
  // return the return value of depthSumWithLevel called with nestedList
  return depthSumWithLevel(nestedList)
}

// declare function depthSumWithLevel, which takes in a variable called nestedList that's of type 
// NestedInteger[], a number called level that has a default value of 1, and returns a number
function depthSumWithLevel(nestedList: NestedInteger[], level: number = 1): number {
  // create mutable variable sum and initialize as 0
  let sum = 0
  // loop through each list in array nestedList
  for (const list of nestedList) {
    // if list is an integer, then set sum equal to sum plus level times the integer value of 
    // list. if the integer value of list is unavailable use a default value of 0 here.
    if (list.isInteger()) sum += level * (list.getInteger() ?? 0)
    // else, set sum equal to sum plus the return value of calling depthSumWithLevel with the list 
    // in the current value of list, and level plus 1
    else sum += depthSumWithLevel(list.getList(), level + 1)
  }
  return sum
}
