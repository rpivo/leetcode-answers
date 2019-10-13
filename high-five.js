var highFive = function(items) {
  let id = 1;
  let grades = [];
  let averages = [];
  let average;
  while (items.length) {
    grades = items.filter(item => item[0] === id).map(item => (item = item[1]));
    items = items.filter(item => item[0] !== id);
    if (grades.length) {
      while (grades.length > 5) grades.splice(grades.indexOf(Math.min(...grades)), 1);
      average = Math.trunc(grades.reduce((acc, curr) => acc + curr, 0) / grades.length);
      averages.push([id, average]);
    }
    id++;
  }
  return averages;
};

const items = [
  [1, 48],
  [1, 44],
  [1, 28],
  [1, 29],
  [1, 93],
  [2, 46],
  [2, 72],
  [2, 37],
  [2, 25],
  [2, 90],
  [3, 42],
  [3, 37],
  [3, 73],
  [3, 23],
  [3, 73],
  [4, 88],
  [4, 34],
  [4, 47],
  [4, 39],
  [4, 10],
  [5, 54],
  [5, 84],
  [5, 26],
  [5, 61],
  [5, 16]
];

console.log(highFive(items));
