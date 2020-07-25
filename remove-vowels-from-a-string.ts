function removeVowels(S: string): string {
  let match;
  while ((match = /[aeiou]/.exec(S)) !== null) {
    S = S.slice(0, match.index) + S.slice(match.index + 1, S.length);
  }
  return S;
};