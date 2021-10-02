// define function finalValueAfterOperations, which takes in an array of strings called operations, and returns a number
function finalValueAfterOperations(operations: string[]): number {
  // create mutable variable called result, which is a number, and set it equal to 0
  let result: number = 0;
  // for each operation in operations
  operations.forEach((operation) => {
    // set up a switch of cases for each operation
    switch (operation) {
      // if operation is '++X', increment result immediately (this makes no difference, not sure why they did this)
      case "++X":
        ++result;
        break;
      // if operation is 'X++', increment result after this operation
      case "X++":
        result++;
        break;
      // if operation is '--X', decrement result immediately (this makes no difference, not sure why they did this)
      case "--X":
        --result;
        break;
      // if operation is 'X--', decrement result after this operation
      case "X--":
        result--;
        break;
    }
  });
  return result;
}
