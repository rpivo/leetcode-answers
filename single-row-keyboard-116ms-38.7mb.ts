function calculateTime(keyboard: string, word: string): number {
  let previous = 0;
  return Array
    .from({ length: word.length })
    .map((_, index) => keyboard.indexOf(word[index]))
    .reduce((sum, current) => {
      sum += Math.abs(previous - current);
      previous = current;
      return sum;
    }, 0);
};