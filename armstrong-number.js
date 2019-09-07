var isArmstrong = function(N) {
  let armstrong = Array.from(N.toString()).map(Number).reduce((acc, cur) => {
    return acc + Math.pow(cur, N.toString().length);
  }, 0);
  return armstrong === N ? true : false;
};

console.log(isArmstrong(123));