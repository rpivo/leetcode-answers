function sumZero(n: number): number[] {
  const result = []
  for (let i = 1; i <= n; i++) {
    if (i < n) {
      result.push(i, -i)
      i++
    } else result.push(0)
  }
  return result
};