const flipAndInvertImage = A => A.map(arr => arr.reverse().map(bool => +!bool));

let arr = [[0, 0, 1], [0, 1, 0]];

console.log(flipAndInvertImage(arr));