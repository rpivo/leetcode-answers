function smallerNumbersThanCurrent(nums: number[]): number[] {
  let map = new Map();
  nums
    // without slice(), sort() will mutate the original nums array. slice() first creates a copy
    .slice()
    .sort((a, b) => a - b)
    .forEach((item, index) => {
    if (!map.has(item)) map.set(item, index);
  });
  return nums.map(item => map.get(item));
};