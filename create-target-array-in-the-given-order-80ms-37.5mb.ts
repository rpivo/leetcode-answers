function createTargetArray(nums: number[], index: number[]): number[] {
  const result: number[] = [];
  nums.forEach((item, i) => result.splice(index[i], 0, item));
  return result;
};