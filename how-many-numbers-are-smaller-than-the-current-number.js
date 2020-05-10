var smallerNumbersThanCurrent = function(nums) {
  let arr = [];
  nums.forEach((outerNum, index) => {
    let count = 0;
    nums.forEach(innerNum => {
      if (outerNum > innerNum) count += 1;
    });
    arr.push(count);
  });
  return arr;
};