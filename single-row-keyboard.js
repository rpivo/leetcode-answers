/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
var calculateTime = function(keyboard, word) {
  let time = 0;
  previousIndex = 0
  let currentIndex;
  const arr = word.split('');
  arr.forEach((letter) => {
    // console.log(keyboard.indexOf(letter));
    currentIndex = keyboard.indexOf(letter);
    time += Math.abs(currentIndex - previousIndex);
    previousIndex = currentIndex;
  });
  return time;
};

const keyboard = 'pqrstuvwxyzabcdefghijklmno';
const word = 'leetcode';

calculateTime(keyboard, word);