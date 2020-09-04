function flipAndInvertImage(A: number[][]): number[][] {
  return A.map(a => a.reverse().map(char => char ? 0 : 1)) 
}