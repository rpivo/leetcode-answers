var uniqueMorseRepresentations = function(words) {
  let morseWords = [];
  const morse = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--.."
  ];
  const alphabet = [
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
    "z"
  ];
  words.forEach(word => {
    morseWords.push(
      word
        .split("")
        .map(letter => morse[alphabet.indexOf(letter)])
        .join("")
    );
  });
  morseWords = new Set(morseWords);
  return morseWords.size;
};

uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]);
