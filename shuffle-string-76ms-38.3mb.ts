function restoreString(s: string, indices: number[]): string {
  let ans = Array.from({ length: indices.length }, () => '');
  indices.forEach((newI, i) => ans[newI] = s[i]);
  return ans.join('');
}