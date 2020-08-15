function anagramMappings(A: number[], B: number[]): number[] {
  return Array.from(Array(A.length), (_, i) => B.indexOf(A[i]));
};