function checkIfPangram(sentence: string): boolean {
  const s = new Set([...sentence]);
  return s.size === 26;
}
