function decompressRLElist(nums: number[]): number[] {
  const result: number[] = [];
  for (let i = 0; i < nums.length; i += 2) {
    result.push(...Array(nums[i]).fill(nums[i + 1]));
  }
  return result;
};