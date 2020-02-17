const numberOfSteps = (num) => {
  for (count = 0; num > 0; count++) {
    num % 2 === 0 ? num = num / 2 : num = num - 1;
  }
  return count;
}

console.log(numberOfSteps(123));