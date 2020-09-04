function countNegatives(grid: number[][]): number {
  const matches = (grid + '').match(/-/g)
  return matches ? matches.length : 0
};