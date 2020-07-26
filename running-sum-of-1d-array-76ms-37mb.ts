function runningSum(nums: number[]): number[] {
  let acc = 0;
  return nums.map((num, index) => {
    acc += num;
    if (index < 1) return num;
    return acc;
  });
};