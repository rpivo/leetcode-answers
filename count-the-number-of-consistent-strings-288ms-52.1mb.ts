function countConsistentStrings(allowed: string, words: string[]): number {  
  return words
    .map(w => w.split('').every(c => allowed.includes(c)))
    .filter(Boolean)
    .length
};