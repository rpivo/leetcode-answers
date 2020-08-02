// declare function numJewelsInStones, that takes in a string called J, a string called S, and
// returns a number
function numJewelsInStones(J: string, S: string): number {
  // create mutable variable called output and initialize it to 0
  let output = 0;
  // get the length of string J and store as an immutable variable
  const stone_i_have_length = J.length;
  // get the length of string S and store as an immutable variable
  const stone_is_jewels_length = S.length;

  // loop from 0 to value of stone_i_have_length
  for (let i = 0; i < stone_i_have_length; i++) {
    // loop from 0 to stone_is_jewels_length
    for (let j = 0; j < stone_is_jewels_length; j++) {
      // if J at index i is equal to S at index j
      if (J[i] === S[j]) {
        // increment output
        output += 1;
      }
    }
  }
  return output;
};