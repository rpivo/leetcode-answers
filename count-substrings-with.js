var countLetters = function(S) {
  let sum = 0, temp;
  for (let i = 0; i < S.length; i++) {
    if (typeof S[i] !== 'undefined') {
      sum += 1;
      console.log(`sum from line 5: ${sum}`);
      temp = i;
    };
    while(typeof S[i + 1] !== 'undefined') {
      if (S[i] === S[i + 1]) {
        sum += 1
        console.log(`sum from line 10: ${sum}`);
        i++;
      } else i = S.length;
    }
    i = temp;
  }
  return sum;
};

S = "aaabaccccc";

console.log(countLetters(S));