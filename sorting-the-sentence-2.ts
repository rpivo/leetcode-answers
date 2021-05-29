// declare function sortSentence, which takes in a string s, and returns a
// string
function sortSentence(s: string): string {
  // create immutable variable words and set it to s split by each space, 
  // which will create an array of strings.
  const words = s.split(' ');
  // create immutable variable len and set it to the length of words.
  const len = words.length;

  // return the result of calling reduce on words. As the starting value for
  // the reduce, we'll use a new array of length len, and join each item in 
  // this array with a space ' '.
  return words.reduce((res, word) => {
    // note that the original solution for this used substr instead of
    // substring. With substr, you can use a negative index to get a substring
    // that starts at some index from the end of the string rather than the
    // beginning. You can't do this with substring(). Unfortunately, substr()
    // is deprecated.

    // create immutable variable idx and set it to the last character of word,
    // converted to a number. then subtract this number by 1.
    const idx = +(word.substring(word.length - 1)) - 1;
    // set the value of res at index idx to word, but without its last
    // character, which is a number representing the word index.

    // There is a problem with this solution here. We get the error "Index
    // signature in type 'String' only permits reading."

    // @ts-ignor
    res[idx] = word.substring(0, word.length - 1);
    return res;
  }, new Array(len).join(' '));
}