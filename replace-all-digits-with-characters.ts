function replaceDigits(s: string): string {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = "";

  for (let i = 1; i < s.length; i += 2) {
    result += s[i - 1] + alphabet[+s[i] + alphabet.indexOf(s[i - 1])];
  }

  if (result.length < s.length) result += s[s.length - 1];

  return result;
}
