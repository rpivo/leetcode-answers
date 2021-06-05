function isSumEqual(
  firstWord: string,
  secondWord: string,
  targetWord: string
): boolean {
  function convert(word) {
    return +word
      .split("")
      .map((c) => c.charCodeAt(0) - 97)
      .join("");
  }

  return convert(firstWord) + convert(secondWord) === convert(targetWord);
}
