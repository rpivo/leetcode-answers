function numJewelsInStones(J: string, S: string): number {
  let count = 0
  for (const char of S) {
    if (J.indexOf(char) !== -1) count += 1
  }
  return count
}