/*
 * not a test suite file -- just a playground while working on answers.
 */
let array1 = [1, 1, 3, 4, 5];
let array2 = [2, 3, 5, 4, 1];

let array3 = array1.filter((number) => {number === 1});

console.log(array1.indexOf(10));

// if (array1.indexOf(1)) {}

if (array1.indexOf(1) !== -1) {
  console.log('jacuzzi');
}

array1.indexOf(1) !== -1 && console.log(array1.indexOf(1));

// array1.indexOf(1) !== -1 && 