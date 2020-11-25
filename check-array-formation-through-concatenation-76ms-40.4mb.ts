// declare function canFormaArray, which takes in an array of numbers called arr, and an array of 
// arrays of numbers called pieces, and returns a boolean
function canFormArray(arr: number[], pieces: number[][]): boolean {
  // declare immutable array of numbers called subArrIndices and initialize as an empty array with 
  // length 100
  const subArrIndices: number[] = Array.from({ length: 100 });
  // for each item in pieces, take the item p and the index i and set the value of subArrIndices 
  // using the value of item p at index 0 as the index equal to i.
  pieces.forEach((p, i) => subArrIndices[p[0]] = i);

  // loop an indeterminate number times so long as i (initialized as 0) is less than the length of 
  // arr
  for (let i = 0; i< arr.length;) {
    // declare immutable variable currentNum and set it equal to the value of arr at index i
    const currentNum = arr[i];
    // declare immutable variable subArr and set it equal to the value of pieces at the value of 
    // subArrIndices at the value of currentNum as index.
    const subArr = pieces[subArrIndices[currentNum]];
    // if subArr is a falsy value, return false
    if (!subArr) return false;
    // if the return value of sameValues() with values arr, i, and subArr as passed in arguments 
    // returns a falsy value, then return false
    if (!sameValues(arr, i, subArr)) return false;
    // increment i by the length of subArr
    i += subArr.length;
  }
  return true;
}

// declare function sameValues, which takes in an array of numbers called x, a number called 
// xStartIndex, and an array of numbers called y, and returns a boolean
function sameValues(x: number[], xStartIndex: number, y: number[]): boolean {
  // declare immutable variable called length and set it equal to the minimum value of either the 
  // length of x or the length of y
  const length = Math.min(x.length, y.length);
  // loop from i to the value of length
  for (let i = 0; i < length; i++) {
    // if the value of x at i + xStartIndex as the index is not equal to the value of y at index 
    // i, return false
    if (x[i + xStartIndex] !== y[i]) return false;
  }
  return true;
}