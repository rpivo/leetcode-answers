function targetIndices(nums: number[], target: number): number[] {
  return nums
    .sort((a, b) => a - b)
    .reduce((arr, n, i) => (n === target ? [...arr, i] : arr), []);
}
