/*
 * an anagram is a word, phrase, or name formed by rearranging the letters of another, such as
 * 'cinema', from 'iceman'.
 * 
 * in this problem, we are given two arrays: A and B. B is an anagram of A, meaning that B is made
 * by randomizing the order of the elements in A.
 * 
 * we want to loop through the items in array A and find the index location of that value in array
 * B.
 *
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]} 
 */

let A = [ 40, 40 ];
let B = [ 40, 40 ];

var anagramMappings = function(A, B) {
  let C = [];
  A.forEach((aNumber) => {
    B.forEach((bNumber) => {
      // aNumber === bNumber && C.push(B.indexOf(aNumber));
      if (aNumber === bNumber && )
    });
  });
  return(C);
};

console.log(anagramMappings(A, B));