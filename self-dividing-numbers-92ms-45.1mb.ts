function selfDividingNumbers(left: number, right: number): number[] {
  const result = []
  for (let i = left; i <= right; i++) {
    if (i % 10 === 0) continue
    const digits = (i + '').split('')
    if (digits.length < 2) {
      result.push(i)
      continue
    }
    if (!digits.filter(digit => i % +digit !== 0).length) result.push(i)
  }
  return result
}