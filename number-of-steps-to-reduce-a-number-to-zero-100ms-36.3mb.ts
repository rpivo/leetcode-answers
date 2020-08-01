// declare function numberOfSteps, that takes in a number called num, and returns a number
function numberOfSteps(num: number): number {
  // create mutable variable current that is equal to num
  let current = num;
  // create mutable variable steps that's initialized to 0
  let steps = 0;
  // while current is still greater than 0
  while (current > 0) {
    // increase step count by 1
    steps++;
    // run current through reduce, which will reduce the size of current
    current = reduce(current);
  }
  return steps;
}

// declare function reduce, that takes in a number n, and returns a number
function reduce(n: number): number {
  // if n % 2 is 0 return n / 2, else return n - 1
  return n % 2 === 0
    ? n / 2
    : n - 1;
}