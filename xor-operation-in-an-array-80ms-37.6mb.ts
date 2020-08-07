function xorOperation(n: number, start: number): number {
  return Array
    .from({ length: n })
    .map((_, index) => start + 2 * index)
    .reduce((a, b) => a ^ b);
};