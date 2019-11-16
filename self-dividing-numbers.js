var selfDividingNumbers = function(left, right) {
  let selfDividingNums = [];
  for (let index = left; index <= right; index++) {
    let numSplit = index.toString().split('');
    if (!numSplit.includes('0')) {
      if (numSplit.filter(digit => index % digit === 0).length === numSplit.length) {
        selfDividingNums.push(index);
      }
    }
  }
  return selfDividingNums;
};

console.log(selfDividingNumbers(1, 22));