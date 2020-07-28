function numIdenticalPairs(nums: number[]): number {
  let count = 0;
  const map: { [index: string]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    const mapValue = map[nums[<any>`${i}`]];
    map[nums[<any>`${i}`]] = mapValue ? mapValue + 1 : 1;
  }
  for (const value of Object.values(map)) {
    count += (value * (value - 1)) / 2;
  }
  return count;
};