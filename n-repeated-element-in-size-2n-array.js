var repeatedNTimes = function(A) {
  const B = new Set(A);
  for (setNum of B) {
    if (A.filter(arrNum => arrNum === setNum).length === A.length / 2) return setNum;
  }
};

console.log(repeatedNTimes([1, 3, 2, 3]));