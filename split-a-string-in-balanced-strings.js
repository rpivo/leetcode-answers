var balancedStringSplit = function(s, balancedStrings = 0, lCount = 0, rCount = 0) {
  for (let i = 0; i < s.length; i++) {
    s.charAt(i) === 'L' ? lCount++ : rCount++;
    if (lCount === rCount) {
      balancedStrings++;
      lCount = rCount = 0;
    }
  }
  return(balancedStrings);
};

const input = 'LLLLRRRR';

console.log(balancedStringSplit(input));