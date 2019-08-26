let string = "leetcodeisacommunityforcoders";

var removeVowels = function(S) {
  S = S.replace(/a/g, '')
    .replace(/e/g, '')
    .replace(/i/g, '')
    .replace(/o/g, '')
    .replace(/u/g, '');
  console.log(S);
};

removeVowels(string);