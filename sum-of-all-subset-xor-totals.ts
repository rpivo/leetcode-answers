// To solve this problem, we need to be able to ingest an array. Ex:
// [2,5,6]
// And we need to get the sum of all XOR operations of all subsets. Ex:
// 2 + 5 + 6 + 2 ^ 5 + 2 ^ 6 + 5 ^ 6 + 2 ^ 5 ^ 6

// declare function subsetXORSum, which takes in an array of numbers called A,
// variable i initialized to 0, and variable x initialized to 0.
function subsetXORSum(A: Array<number>, i = 0, x = 0) {
  // if i is equal to the length of A.
  return i === A.length
    // return x
    ? x
    // else, we are going to call subsetXORSum twice, each with their own set
    // of arguments. We're going to add the results of these two calls
    // together.

    // This is going to create a tree of calls.

    // For the array [1, 3], it would look like this:

    // subsetXORSum([1, 3], 0, 0);

    // Both calls will receive the same array of numbers A.

    // The first call will receive an increment second argument. This argument
    // is being used to check if it is equal to the total length of A. If it's
    // the same as the length of A, we return x.

    // The final argument of the first call is the result of the operation
    // x ^ A[i]. If x is 0, this will set x to the value of A at index i.
    : subsetXORSum(A, i + 1, x ^ A[i]) + subsetXORSum(A, i + 1, x);
}

// /**
//  * f(*)
//  */

// subsetXORSum([1, 3], 0, 0) {
//   return 0 === 2 // false, will create left and right child calls
//     ? 0
//     : subsetXORSum([1, 3], 1, 0 ^ [1, 3][0]) + subsetXORSum([1, 3], 1, 0);
// }

// /**
//  *   f()
//  * f(*)
//  */

// subsetXORSum([1, 3], 1, 1) {
//   return 1 === 2 // false, will create left and right child calls
//     ? 1
//     : subsetXORSum([1, 3], 2, 1 ^ [1, 3][1]) + subsetXORSum([1, 3], 2, 1);
// }

// /**
//  *   f()
//  * f() f(*)
//  */

// subsetXORSum([1, 3], 1, 0) {
//   return 1 === 2 // false, will create left and right child calls
//     ? 0
//     : subsetXORSum([1, 3], 2, 0 ^ [1, 3][1]) + subsetXORSum([1, 3], 2, 0);
// }

// /**
//  *       f()
//  *     f() f()
//  *  f(*)
//  */

// subsetXORSum([1, 3], 2, 2) {
//   return 2 === 2 // true, will return x
//     ? 2
//     : subsetXORSum([1, 3], 3, 2 ^ [1, 3][2]) + subsetXORSum([1, 3], 3, 2);
// }

// /**
//  *        f()
//  *     f()  f()
//  *    2 f(*)
//  */

// subsetXORSum([1, 3], 2, 1) {
//   return 2 === 2 // true, will return x
//     ? 1
//     : subsetXORSum([1, 3], 3, 1 ^ [1, 3][2]) + subsetXORSum([1, 3], 3, 1);
// }

// /**
//  *        f()
//  *     f()   f()
//  *    2  1 f(*)
//  */

// subsetXORSum([1, 3], 2, 3) {
//   return 2 === 2 // true, will return x
//     ? 3
//     : subsetXORSum([1, 3], 3, 3 ^ [1, 3][2]) + subsetXORSum([1, 3], 3, 3);
// }

// /**
//  *        f()
//  *     f()   f()
//  *    2  1  3 f(*)
//  */

// subsetXORSum([1, 3], 2, 0) {
//   return 2 === 2 // true, will return x
//     ? 0
//     : subsetXORSum([1, 3], 3, 0 ^ [1, 3][2]) + subsetXORSum([1, 3], 3, 0);
// }

/**
 *        f()
 *     f()   f()
 *    2  1  3   0
 */

// At the end of this run, we have 2 + 1 + 3 + 0 = 6.

// Here are some observations about how this works.

// The original author has described this as a DFS (depth-first search)
// solution.

// For an array of any length, we eventually get to a place where we are 
// adding up a row of return values at some level in a tree of function calls.
// Ex:
// [1, 3] results in:

/**
 *        f()
 *     f()   f()
 *    2  1  3   0
 */

// when traversing down further, we are going further to the right of the 
// given array. At some point, we are trying to access items in the array that
// won't exist. Ex:

// [1,3][2]

// This doesn't matter, since the function checks to see if i is the same 
// length of the array. If it is, we return the value of x. Because of this, 
// we'll never go further than the length of the array.

// The function takes in three arguments.

// The first argument is the array. We never slice this array because we don't
// need to. The full array is passed in at every level.

// The second argument is i, which is the index value. This is used as a means 
// of navigating from left to right through the array.

// The last argument is x, which eventually is the return value at some level.

// x will be 0 for all of the right-most nodes on each level.

// The author describes the two use cases that need to be considered at each level:
// 1: include the ith element in the ongoing xor x
// 2: exclude the ith element in the ongoing xor x

// what does this mean?

// what kind of sums do we need?

// 1: we need each individual item. Ex: 1, 3

// 2: we need the sum of all xor calculations for each subset within the array.
// For array [1, 3, 5], this would include:
// 1 ^ 3 + 1 ^ 5 + 3 ^ 5 + 1 ^ 3 ^ 5

// Somehow, this function above is able to get all of these subsets, and all
// the accumulated xor sums from the subsets.

// You can see that the left recursive call is responsible for accumulating 
// these xor sums at each level.

// subsetXORSum(A, i + 1, x ^ A[i])

// This will go through each item in the array, and produce a new xor sum with 
// that new item.

// The right recursive call excludes the current item at index x from the xor 
// summation. This allows us to get the xor summations of each subset. This 
// appears to be a trick that can be used with problems that require 
// traversing all subsets.

// subsetXORSum(A, i + 1, x)