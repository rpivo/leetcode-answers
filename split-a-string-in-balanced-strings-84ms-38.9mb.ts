function balancedStringSplit(s: string): number {
  let count: number = 0;
  let leftCount: number = 0;
  let rightCount: number = 0;
  for (const char of s) {
    char === 'L' ? leftCount += 1 : rightCount += 1;
    if (leftCount === rightCount) count +=1;
  }
  return count;
};