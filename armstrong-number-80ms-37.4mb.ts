function isArmstrong(N: number): boolean {
  const str = '' + N
  return N === str
    .split('')
    .reduce((sum, char) => sum + Math.pow(+char, str.length), 0)
};