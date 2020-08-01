function numberOfSteps (num: number): number {
  const str = num.toString(2);
  let count = 0;
  for (const char of str) {
    if (char === '1') count += 2;
    else count += 1;
  }
  return count - 1;
};