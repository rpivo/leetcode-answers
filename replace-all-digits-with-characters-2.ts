// declare function replaceDigits, which takes in a string s, and returns a string.
function replaceDigits(s: string): string {
  // create mutable string variable shifted, and initialize it to an empty string.
  let shifted: string = "";
  // loop from 0 to the length of s.
  for (let i = 0; i < s.length; i++) {
    // if i is an even number.
    if (i % 2 === 0) {
      // set shifted to shifted plus the value of s at index i
      shifted += s[i];
    // else, if i is an odd number
    } else {
      // set shifted to shifted plus the character that gets return from a given charCode.
      // to get that charCode:
      // we get the charCode for the last character on shifted.
      // we also get the string integer from s at index i, and convert it to a number.
      // we add these two values together to get the charCode we need.
      shifted += String.fromCharCode(
        shifted.charCodeAt(shifted.length - 1) + parseInt(s[i])
      );
    }
  }
  return shifted;
}
