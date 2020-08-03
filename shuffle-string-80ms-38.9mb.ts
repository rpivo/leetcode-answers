function restoreString(s: string, indices: number[]): string {
  const arr = new Array(s.length);
  for (let i = 0; i < s.length; i++) arr[i] = s[indices.indexOf(i)];
  return arr.join('');
};