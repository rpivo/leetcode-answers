function sortSentence(s: string): string {
  const words = s.split(" ").reduce((obj, word) => {
    const cutoff = word.length - 1;
    obj[word[cutoff]] = word.slice(0, cutoff);
    return obj;
  }, {});
  return Object.values(words).join(" ");
}
