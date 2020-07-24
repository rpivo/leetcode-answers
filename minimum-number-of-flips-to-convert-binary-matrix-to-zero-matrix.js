// takes in the full matrix
// str is initialized as empty ''
// read each row
// join each item in row array with '-', Ex: [0, 1, 2, 3] => '0-1-2-3'
// so, stringify creates a string that includes all items in the matrix separated by dashes
const stringify = (matrix) => matrix.reduce((str, row) => `${str}-${row.join('-')}`, '');

// takes in the full matrix, the row index, and col index
const flip = (matrix, row, col) => {
    // if the matrix row exists && the row item is defined
    if (matrix[row] && matrix[row][col] !== undefined) {
        // if the matrix row item is 1, set it to 0. else set it to 1
        matrix[row][col] = matrix[row][col] ? 0 : 1;
    }
}

/**
 * @param {number[][]} mat
 * @return {number}
 */
// takes in the full matrix
var minFlips = function(mat) {
  // create const final
  // `final` will be a stringified matrix (see above stringify() function)
  // we are first transforming the mat matrix variable before passing it to stringify()
  // we are setting each value in the matrix to 0
  // so `final` is a zero matrix that is the size of `mat`
  const final = stringify(mat.map((row) => row.map(() => 0)));
  // const `seen` is a list of all stringified matrices that have occurred
  const seen = new Set();
  // we need a queue to do breadth first search
  // each item in our queue will be an array that contains the current matrix and the number of flips
  const queue = [[mat, 0]];
  // `directions` is an array of coordinates that include up, right, bottom, left, and middle
  const directions = [[0,0],[1,0],[-1,0],[0,1],[0,-1]];
  // while the queue still has items
  while (queue.length) {
    // pull off the first item in queue, and create local vars matrix and numFlips
    // again, matrix is the current matrix
    // numFlips is the number of flips that it took to get here
    const [matrix, numFlips] = queue.shift();
    // stringify matrix
    const strMatrix = stringify(matrix);
    // if matrix matches the previously stringified final example of the matrix
    // then return the current number of flips
    if (strMatrix === final) return numFlips;
    // if the `seen` set does not contain `strMatrix`
    if (!seen.has(strMatrix)) {
      // add `strMatrix` to the `seen` set
      seen.add(strMatrix);
      // loop through each row in `mat`
      for (let i = 0; i < mat.length; i++) {
        // loop through each item in row
        for (let j = 0; j < mat[i].length; j++) {
          // create a new matrix that's an exact copy of `matrix`
          const newMatrix = matrix.map((row) => [...row]);
          // perform a flip() on all given directions for `newMatrix`
          directions.forEach(([down, right]) => flip(newMatrix, i + down, j + right));
          // push `newMatrix` to the queue along with an incremented numFlips
          queue.push([newMatrix, numFlips + 1]);
        }
      }
    }
  }
  return -1;
};
