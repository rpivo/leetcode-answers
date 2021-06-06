// declare type Input, which is a tuple consisting of three strings.
export type Input = [string, string, string];
// declare type Output, which is a boolean.
export type Output = boolean;

// declare function checkConstraints, which takes in an array that is
// destructured as a list of arguments. This array has type Input. We
// destructure the items in this tuple as firstWord, secondWord, targetWord,
// respectively. checkConstraints doesn't return anything.
function checkConstraints(...[firstWord, secondWord, targetWord]: Input): void {
  // if either firstWord or secondWord has a length less than 2
  if (!(1 <= firstWord.length) || !(1 <= secondWord.length)) {
    // throw an error.
    throw new Error("1 <= firstWord.length, secondWord.length");
  }

  // if the length of targetWord is greater than 8
  if (!(targetWord.length <= 8)) {
    // throw an error.
    throw new Error("targetWord.length <= 8");
  }

  // create immutable variable re and set it equal to a new RegExp pattern
  // that matches any lowercase letter from a to j.
  const re = new RegExp("[a-j]");
  // if either firstWord, secondWord, or targetWord do not contain the regex re.
  if (!re.test(firstWord) || !re.test(secondWord) || !re.test(targetWord)) {
    // throw an error.
    throw new Error(
      "firstWord, secondWord, and targetWord consist of lowercase English letters from 'a' to 'j' inclusive"
    );
  }
}

// declare function getNumberByLetter, which takes in string letter and returns a number
function getNumberByLetter(letter: string): number {
  // return the chardCode of the letter, subtracting 97 to normalize the ascii value.
  return letter.charCodeAt(0) - 97;
}

// declare function getNumberByWord, which takes in a string word, and returns a number
function getNumberByWord(word: string): number {
  // create immutable variable stringNumber, which is a string, and set equal
  // to word split by every character, and then mapped by running each
  // character through getNumberByLetter, which will return the characters
  // charCode, and then joining this mapped array into a single string.
  const stringNumber: string = word
    .split("")
    .map((letter) => getNumberByLetter(letter))
    .join("");
  // coerce this string into a number and return it.
  return parseInt(stringNumber);
}

// declare function isSumEqual, which takes in an array that is
// destructured as a list of arguments. This array has type Input. We
// destructure the items in this tuple as firstWord, secondWord, targetWord,
// respectively. isSumEqual returns type Output.
function isSumEqual(...[firstWord, secondWord, targetWord]: Input): Output {
  // first, assert that constraints are correctly enforced by passing the
  // arguments through checkConstraints(). If this doesn't throw an error, we
  // proceed.
  checkConstraints(firstWord, secondWord, targetWord);

  // return the boolean result of checking whether calling getNumberByWord
  // with firstwWord added with calling getNumberByWord with secondWord is
  // equal to calling getNumberByWord with targetWord.
  return (
    getNumberByWord(firstWord) + getNumberByWord(secondWord) ===
    getNumberByWord(targetWord)
  );
}
