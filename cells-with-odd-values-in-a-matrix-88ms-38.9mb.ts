// declare function oddCells that takes in a number n, a number m, an array of arrays of numbers called indices, and returns a number
function oddCells(n: number, m: number, indices: number[][]): number {
  // create mutable variable called matrix that's an array of arrays of numbers and set it to an array of size n
  let matrix: number[][] = new Array(n)
  // loop from 0 to n minus 1
  for (let i = 0; i < n; i++) {
    // create mutable variable called matrixRow and set it to a new array of size m
    let matrixRow = new Array(m)
    // set value of matrix at index i to matrixRow
    matrix[i] = matrixRow
    // loop from o to m minus 1
    for (let x = 0; x < m; x++) {
      // set the value of matrix at in array i at index x to 0. this will initialize all the 
      // values in the matrix as 0
      matrix[i][x] = 0
    }
  }
  // loop from 0 to the length of indices minus 1
  for (let x = 0; x < indices.length; x++) {
    // create mutable variable ri and set it to 0
    let ri = 0
    // create mutable variable ci and set it to 0
    let ci = 0
    // if the array in indices at index x has a length greater than or equal to 2
    if (indices[x].length >= 2) {
      // set ri equal to the value of indices at array x at index 0
      ri = indices[x][0]
      // set ci equal to the value of indices at array x at index 1
      ci = indices[x][1]
    }
    // loop from 0 to n minus 1
    for (let i = 0; i < n; i++) {
      // increment the value of matrix at array i and index ci
      matrix[i][ci] += 1
    }
    // loop from 0 to m minus 1
    for(let i = 0; i < m; i++) {
      // increment the value of matrix at array ri and index i
      matrix[ri][i] += 1
    }
  }
  // create mutable variable numodd and set it equal to 0
  let numodd = 0
  // loop from 0 to n minus 1
  for (let x = 0; x < n; x++) {
    // loop from 0 to m minus 1
    for (let y = 0; y < m; y++) {
      // if the value of matrix at array x and index y divided by 2 leaves a remainder of 1, 
      // increment numodd
      if (matrix[x][y] % 2 === 1) numodd += 1
    }
  }
  return numodd
}