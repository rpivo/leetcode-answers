// declare function removeVowels that takes in a string S and returns a string
function removeVowels(S: string): string {
  // create array vowels that contains all the vowel characters
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  // create new string newS and initialize it as empty
  let newS: string = '';
  // loop through all the characters in string S
  for (let i = 0; i < S.length; i++) {
    // if the current character in S is not found in the array vowels
    if (vowels.indexOf(S[i]) == -1) {
      // append the current character in S to newS
      newS += S[i];
    } 
  }
  return newS;
}