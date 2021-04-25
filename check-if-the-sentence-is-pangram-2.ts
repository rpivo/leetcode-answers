// declare function checkIfPangram, which takes in a string called sentence, and returns a boolean
function checkIfPangram(sentence: string): boolean {
  // create immutable variable called letters, which is an array of each letter in the alphabet
  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  // check that each letter in letters appears in sentence by iterating through letters with every,
  // which will only be true if each iteration returns true. For each iteration we check that
  // sentence includes the letter.
  return letters.every((letter) => sentence.includes(letter));
}
