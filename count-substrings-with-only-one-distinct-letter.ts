function countLetters(S: string): number {
  let sum = S.length
  const matches = S.match(/(.)\1+/g)
  if (matches) return matches.reduce((sum, match) => {
    const length = match.length
    return sum + ((length * (length + 1)) / 2) - length // triangular number
  }, sum)
  return sum
}