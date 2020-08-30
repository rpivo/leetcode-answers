// declare function uniqueMorseRepresentations, that takes in an array of strings called words and
// returns a number
function uniqueMorseRepresentations(words: string[]): number {
  // create mutable object called alphabet, that has keys that are strings called char, and values 
  // that are strings
  let alphabet: {[char:string]: string} = {a:'.-',b:'-...',c:'-.-.',d: '-..',e:'.',f:'..-.',g: '--.',h:'....',i: '..',j: '.---',k: '-.-',l: '.-..',m: '--',n: '-.',o: '---',p: '.--.',q: '--.-',r: '.-.', s: '...',t: '-',u: '..-',v: '...-',w: '.--',x: '-..-',y: '-.--',z: '--..'};

  // return the size of a new Set. use a nested mapping function to return an array to use to 
  // construct the Set.
  // map over the array words. take each word and split it into individual characters.
  // map over these characters. take each letter and return the value of alphabet at key letter.
  // after the inner map is complete, join the characters again into a single string.
  return new Set(words.map(word => word.split('').map(letter=> alphabet[letter]).join(''))).size;
};