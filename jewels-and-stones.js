var numJewelsInStones = function(J, S) {
  let numberOfOccurrences = 0
  for (indexJ = 0; indexJ < J.length; indexJ++) {
    for (indexS = 0; indexS < S.length; indexS++) {
      if (J.charAt(indexJ) === S.charAt(indexS)) {
        numberOfOccurrences++
      }
    }
  }
  return numberOfOccurrences
}