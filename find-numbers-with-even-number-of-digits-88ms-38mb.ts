function findNumbers(nums: number[]): number {
  return nums.reduce((count, current) => {
    current.toString().length % 2 === 0 ? count++ : count;
    return count;
  }, 0);
};