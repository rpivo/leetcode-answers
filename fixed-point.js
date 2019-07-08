/*
 * given an array A of distinct integers sorted in ascending order, return the smallest index i
 * that satisfies A[i] == i . 
 */

var fixedPoint = function(A) {
  for (i = 0; i < A.length; i++) {
    if (A.indexOf(i) > -1 && i === A[i]) {
      console.log(A.indexOf(i));
      break;
    } else if (i === (A.length - 1)) {
      console.log(-1);
    }
  }
};

A = [ -10, -5, 0, 3, 7 ];

fixedPoint(A);