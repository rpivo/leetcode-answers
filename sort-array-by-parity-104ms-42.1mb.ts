function sortArrayByParity(A: number[]): number[] {
  const even = n => n % 2 === 0
  const odd = n => n % 2 !== 0
  return [].concat(A.filter(even), A.filter(odd))
}
